const sanitizer = require('sanitizer');

const bodySanitizer = (req, res, next) => {
  // si la requete contient un body
  if (req.body) {
    // alors pour chaque propriété du body
    for (let propName in req.body) {
      // on transforme les caractère spéciaux en HTMLEntities
      // par exemple un "<" sera converti en "&lt;"
      if(typeof req.body[propName] === "string") {
        req.body[propName] = sanitizer.escape( req.body[propName] );
      }
    }
  }
  next();
};

module.exports = bodySanitizer;