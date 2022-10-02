// Expected Result :
// [
//   { name: 'Rian Nugraha', school_name: 'PLMK-JKT' },
//   { name: 'Ari Santoso', school_name: 'GRSR-JKT' },
//   { name: 'Rahman Sunggara', school_name: 'GELM-JKT' },
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.

const source = [
  {
    id: "1",
    data: {
      first_name: "Rian",
      last_name: "Nugraha",
    },
    school: {
      id: "1",
      data: "PLMK-JKT",
    },
  },
  {
    id: "2",
    full_name: "Ari Santoso",
    school: {
      id: "1",
      short_name: "GRSR",
      data: "JKT",
    },
  },
  {
    id: "3",
    data: {
      first_name: "Rahman",
      last_name: "Sunggara",
    },
    school: {
      id: "1",
      short_name: "GELM",
      data: "JKT",
    },
  },
  {
    id: "4",
    data: {
      first_name: "Rian",
      last_name: "Nugraha",
    },
    school: {
      id: "2",
      data: "PLMK-BDG",
    },
  },
];

const school_id = 1;

function result(source, school_id) {
  // Your answer here
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i].school.id === school_id.toString() && source[i].data) {
      if (source[i].school.short_name) {
        result.push({
          name: source[i].data.first_name + " " + source[i].data.last_name,
          school_name:
            source[i].school.short_name + "-" + source[i].school.data,
        });
      } else {
        result.push({
          name: source[i].data.first_name + " " + source[i].data.last_name,
          school_name: source[i].school.data,
        });
      }
    }
    if (source[i].school.id === school_id.toString() && !source[i].data) {
      if (source[i].school.short_name) {
        result.push({
          name: source[i].full_name,
          school_name:
            source[i].school.short_name + "-" + source[i].school.data,
        });
      } else {
        result.push({
          name: source[i].full_name,
          school_name: source[i].school.data,
        });
      }
    }
  }
  return result;
}

console.log(result(source, school_id));
