import { dbQuery } from "../database";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await dbQuery("SELECT * FROM cars");
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
});

router.post("/car", async (req, res, next) => {
  try {
    const hozzaad = await dbQuery();
    res.status(201).json(hozzaad);
  } catch(err) {
    next(err);
  }
});

router.put(`/car/${id}`, async (req, res, next) => {
  try {
    const change = await dbQuery();
    res.status(201).json(change);
  } catch (err) {
    next(err);
  }
});

router.delete(`/car/${id}`, async (req, res, next) => {
  try {
    const torles = await dbQuery(`SELECT ID=${id} FROM cars`);
    res.status(204).json(torles);
  } catch (err) {
    next(err);
  }
});
