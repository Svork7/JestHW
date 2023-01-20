import getHealth from "../health";
test("Здоровье равно 0", () => {
  expect(getHealth({ name: "Маг", health: 1 })).toBe("critical");
});

test("Здоровье равно 14", () => {
  expect(getHealth({ name: "Маг", health: 14 })).toBe("critical");
});

test("Здоровье равно 15", () => {
  expect(getHealth({ name: "Маг", health: 15 })).toBe("wounded");
});

test("Здоровье равно 50", () => {
  expect(getHealth({ name: "Маг", health: 50 })).toBe("wounded");
});

test("Здоровье равно 70", () => {
  expect(getHealth({ name: "Маг", health: 51 })).toBe("healthy");
});

test("Здоровье равно 100", () => {
  expect(getHealth({ name: "Маг", health: 100 })).toBe("healthy");
});
