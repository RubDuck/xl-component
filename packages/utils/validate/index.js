const validate = {
  isNum: function (val) {
    const res = Number(val);
    if (Number.isNaN(res)) {
      return false;
    }
    return true;
  }
};

export default validate;
