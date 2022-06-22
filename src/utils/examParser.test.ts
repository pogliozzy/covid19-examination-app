import examParser from './examParser';

/**
 * check "No data..." message  
 */
const dataMock = [{
    "date": "2020-03-05T15:00:00.000Z",
    "id": 0,
    "locationId": 1,
    "result": "pending"
  },
  {
    "date": "2020-03-06T15:00:00.000Z",
    "id": 1,
    "locationId": 5,
    "result": "pending"
  },
  {
    "date": "2020-03-07T15:00:00.000Z",
    "id": 2,
    "locationId": 9,
    "result": "positive"
  }];

  const NoDateMock = [{
    "date": null,
    "id": 0,
    "locationId": 1,
    "result": "pending"
  }];

  const NaNMock = [{
    "date": "2020-03-07T15:00:00.000Z",
    "id": "zero",
    "locationId": "1",
    "result": "pending"
  }];

  test('test exam parser class', () => {
    const resultList = examParser(dataMock);
    console.log(resultList);
    expect(resultList).toHaveLength;
    expect(resultList[0].result).toMatch("pending"); 
    expect(resultList[0].date).toBeValid; 
    expect(resultList[1].result).toMatch("pending"); 
    expect(resultList[1].date).toBeValid;
    expect(resultList[2].result).toMatch("positive"); 
    expect(resultList[2].date).toBeValid;
  });

 test('test exam parser class', () => {
    const resultList = examParser(NoDateMock);
    //console.log(resultList);
    expect(resultList).toHaveLength;
    expect(resultList[0].result).toMatch("pending"); 
    expect(resultList[0].date).toBeValid; 
  });

  /**
   * This test the parser for type mismatch exceptions 
   */
  test('test exam parser class', () => {
    const resultList = examParser(NaNMock);
    //console.log(resultList);
    expect(resultList).toHaveLength;
    expect(resultList[0].result).toMatch("pending");
    expect(resultList[0].locationId).toBeNaN;
    const number1 = Number(resultList[0].locationId);  
    expect(number1).toBe(1);
  });