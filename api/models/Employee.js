/**
* Employee.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    repositoryName: {
      type: "string",
      required: true,
    },
    repositoryID: {
      type: "string",
      required: "true",
      unique: true
    },
    pusherName: {
      type: "string",
      required: true
    },
    beforeID: {
      type: "string",
      required: true
    },
    afterID: {
      type: "string",
      required: true
    },
    dateTime: {
      type: "string",
      required: true
    }
  }
};

