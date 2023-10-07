import { csaladom } from "./adatok.js";
import TablaCsalad from "./megjelenit.js";

$(function () {
  const szulElem = $(".tartalom");
  new TablaCsalad(csaladom, szulElem);
});
