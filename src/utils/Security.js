const Access = [
  { role: "Admin" },
  {
    resource: {
      Dashboard: {
        view: "true",
        edit: "true",
        create: "true",
        update: "false",
      },
      Products: {
        view: "true",
        edit: "true",
        create: "true",
        update: "true",
      },
      Home: {
        view: "true",
        edit: "true",
        create: "true",
        update: "true",
      },
    },
  },
];

function checkAccess(userRole, resource, operation) {
  let access = false;

  Access.forEach((accessRole) => {
    if (accessRole.role === userRole) {
      accessRole.resource.forEach((accessRes) => {
        if (accessRes.hasOwnProperty(resource)) {
          access = accessRes[resource][operation] === "true";
        }
      });
    }
  });

  return access;
}

const hasAccess = checkAccess("Admin", "Dashboard", "view");
console.log(hasAccess); // true
