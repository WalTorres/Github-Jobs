function saveName(name) {
  let message = "";

  try {
    if (name.length < 6) throw "SHORT";
    if (name.length > 10) throw "LONG";

    message = `El nombre ${name} es correcto`;
  } catch (err) {
    if (err === "SHORT") {
      message = `El nombre ${name} es muy  corto`;
    }
    if (err === "LONG") {
      message = `El nombre ${name} es muy  largo`;
    }
  } finally {
    console.log("nombre evaluado: ", message);
  }
}

saveName("ana");
saveName("luis");
saveName("sebastian");
