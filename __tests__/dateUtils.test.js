import DateUtils from '../components/dateUtils';

// Simulating the Date so we can indicate the expected
// output
const fixedDate = new Date('2019-02-26T09:39:59');
Date = class extends Date {
    constructor() {
        super();
        return fixedDate;
    }
};

describe("DateUtils", () => {
    
    const dateUtils = new DateUtils();
    
    describe("Methods", () => {
        it("GetIndexOfToday returns the expected index", () => {
            const expectedIndex   = 56;
            const actualIndex     = dateUtils.getIndexOfToday();
            expect( actualIndex ).toBe(expectedIndex);
        });

        it("GetDateString works fine", () => {
            const mockedChange = {
                owner: "Ana",
                day: 5,
                month: 2,
                year: 2019,
                weekday: 1,
                turn: "M",
                type: "change"
            };

            const expectedOutput =
                "Lunes 5 de Febrero";

            const actualOutput = dateUtils.getDateString(mockedChange);
            expect( actualOutput ).toBe(expectedOutput);
        });

        describe("GetTurnString", () => {
            it("Returns the correct value", () => {
                const inputs = [ 'M', 'T', 'N', 'L', '-'];
                const expectedOutputs = [
                    "por la mañana",
                    "por la tarde",
                    "por la noche",
                    "(LIBRE)",
                    "(SALIDA DE NOCHE)"
                ];

                var actualOutput;

                for ( let i = 0; i < 5; i++ ) {
                    actualOutput = dateUtils.getTurnString(inputs[i]);
                    expect( actualOutput ).toBe(expectedOutputs[i]);
                }
            });
        });

        describe("GetMonthOfDayIndex", () => {
            it("Works fine when the day is at the middle of a month", () => {
                const expectedMonth = 1;
                const actualMonth   = dateUtils.getMonthOfDayIndex(56);
                expect( actualMonth ).toBe(expectedMonth)
            });

            it("Works fine when it is the day 0", () => {
                const expectedMonth = 0;
                const actualMonth   = dateUtils.getMonthOfDayIndex(0);
                expect( actualMonth ).toBe(expectedMonth)                
            });

            it("Works fine when it is first day of a month", () => {
                const expectedMonth = 1;
                const actualMonth   = dateUtils.getMonthOfDayIndex(31);
                expect( actualMonth ).toBe(expectedMonth)                
            });

            it("Works fine when it is last day of a month", () => {
                const expectedMonth = 0;
                const actualMonth   = dateUtils.getMonthOfDayIndex(30);
                expect( actualMonth ).toBe(expectedMonth)                
            });
        });
    });

    describe("Attributes", () => {
        it("IndexOfToday is correct", () => {
            const expectedIndex   = 56;
            const actualIndex     = dateUtils.indexOfToday;
            expect( actualIndex ).toBe(expectedIndex);
        });
    });
})