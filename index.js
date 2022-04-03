const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((prevVal, currVal) => prevVal + currVal, 0)
// NOTE: When simply adding numbers, the initial value (0) can be omitted