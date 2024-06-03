import { STATUS_CODE } from "../constants/statusCodes.js";
import { Associations, Car } from "../models/index.js";
import _ from "lodash";
import Apriori from "apriori";
import { Op } from "sequelize";

export class AssociationsController {
  static async getAssociations(req, res) {
    try {
      const { locationType } = req.query;

      if (!locationType) {
        return res
          .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
          .json({ message: "Internal Server Error", error: e });
      }

      const associations = await Associations.findAll();

      const dataRules = _.groupBy(associations, ({ locationType, type }) =>
        JSON.stringify({ locationType, type })
      );

      const dataValues = Object.values(dataRules).map((v) =>
        v.map((w) => [w.dataValues.locationType, w.dataValues.type])
      );

      const groupedDataValues = dataValues.reduce((acc, [city]) => {
        if (!acc[city]) {
          acc[city] = [];
        }

        acc[city].push(city);

        return acc;
      }, {});

      const dataset = Object.values(groupedDataValues).flat();

      const apriori = new Apriori.Algorithm(0.01, 0.05, false);
      const { associationRules } = apriori.analyze(dataset);

      const sortedAssociationRules = [...associationRules].sort(
        (i, j) => j.confidence - i.confidence
      );

      const transformedDataset = dataset.reduce((acc, [key, value]) => {
        if (!acc[key]) {
          acc[key] = [];
        }

        acc[key].push(value);

        return acc;
      }, {});

      const cars = await Car.findAll({
        where: {
          type: {
            [Op.in]: transformedDataset[locationType],
          },
        },
        attributes: {
          exclude: ["carId"],
        },
      });

      return res.status(STATUS_CODE.OK).json({
        cars: cars.map((car) => ({
          ...car.dataValues,
          maxRating: Math.round(
            car.rating.reduce((accum, item) => accum + item, 0) /
              car.rating.length
          ),
        })),
      });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }

  static async createAssociation(req, res) {
    try {
      const isEmptyData = !Object.keys(req.body).length;

      if (isEmptyData) {
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: "No data provided" });
      }

      const association = await Associations.create({ ...req.body });

      return res.status(STATUS_CODE.CREATED).json({ association });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }
}
