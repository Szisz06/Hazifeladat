class TablaCsalad {
  constructor(csaladom, szulElem) {
    this.csaladom = csaladom;
    this.szulElem = szulElem;
    let tabla = this.htmlOsszeallit();
    szulElem.html(tabla);
  }

  htmlOsszeallit() {
    let tabla =
      "<table class='table table-striped table-info  text-center' id='familyTable'>";
    if (this.csaladom.length > 0) {
      tabla += "<thead class='bg-success'><tr>";
      for (const tulajdonsag in this.csaladom[0]) {
        if (this.csaladom[0].hasOwnProperty(tulajdonsag)) {
          tabla += `<th data-oszlop="${tulajdonsag}">${tulajdonsag}</th>`;
        }
      }
      tabla += "</tr></thead>";
    }
    tabla += "<tbody>";
    for (let i = 0; i < this.csaladom.length; i++) {
      const element = this.csaladom[i];
      tabla += "<tr>";
      for (const tulajdonsag in element) {
        if (element.hasOwnProperty(tulajdonsag)) {
          tabla += `<td data-oszlop="${tulajdonsag}">${element[tulajdonsag]}</td>`;
        }
      }
      tabla += "</tr>";
    }
    tabla += "</tbody>";
    tabla += "</table>";
    return tabla;
  }
}

export default TablaCsalad;
