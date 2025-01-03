export interface Row {
  id: number;
  month: string;
  returns: number;
  amount: number;
}

export const rows: Row[] = [
  { id: 1, month: "May-22", returns: 1.03, amount: 20621 },
  { id: 2, month: "Jun-22", returns: 0.81, amount: 16201 },
  { id: 3, month: "Jul-22", returns: 0.24, amount: 4830 },
  { id: 4, month: "Aug-22", returns: 0.4, amount: 7961 },
  { id: 5, month: "Sep-22", returns: 0.45, amount: 8924 },
  { id: 6, month: "Oct-22", returns: 0.42, amount: 8427 },
  { id: 7, month: "Nov-22", returns: 0.42, amount: 8427 },
  { id: 8, month: "Dec-22", returns: 0.19, amount: 3714 },
  { id: 9, month: "Jan-23", returns: 0.32, amount: 6351 },
  { id: 10, month: "Feb-23", returns: 0.22, amount: 4358 },
  { id: 11, month: "Mar-23", returns: 0.48, amount: 9687 },
  { id: 12, month: "Apr-23", returns: 0.12, amount: 2471 },
  { id: 13, month: "May-23", returns: 0.2, amount: 3987 },
  { id: 14, month: "Jun-23", returns: 1.48, amount: 29641 },
  { id: 15, month: "Jul-23", returns: 0.18, amount: 3687 },
  { id: 16, month: "Aug-23", returns: 0.25, amount: 4971 },
  { id: 17, month: "Sep-23", returns: 0.83, amount: 16670 },
  { id: 18, month: "Oct-23", returns: 0.36, amount: 7240 },
  { id: 19, month: "Nov-23", returns: 0.19, amount: 3763 },
  { id: 20, month: "Dec-23", returns: 0.65, amount: 13012 },
  { id: 21, month: "Jan-24", returns: 0.18, amount: 3674 },
  { id: 22, month: "Feb-24", returns: 0.1, amount: 2047 },
  { id: 23, month: "Mar-24", returns: 0.13, amount: 2645 },
  { id: 24, month: "Apr-24", returns: 0.09, amount: 1871 },
  { id: 25, month: "May-24", returns: 0.45, amount: 9015 },
  { id: 26, month: "Jun-24", returns: 0.25, amount: 5621 },
  { id: 27, month: "Jul-24", returns: 0.34, amount: 6794 },
  { id: 28, month: "Aug-24", returns: 0.19, amount: 3878 },
  { id: 29, month: "Sep-24", returns: 0.47, amount: 9414 },
  { id: 30, month: "Oct-24", returns: 1.02, amount: 20414 },
  { id: 31, month: "Nov-24", returns: 0.23, amount: 4678 },
  { id: 32, month: "Dec-24", returns: 0.65, amount: 13023 },
];

export const columns = [
  { field: "month", headerName: "Month", width: 150, flex: 1 },
  { field: "returns", headerName: "% Returns", width: 150, flex: 1 },
  { field: "amount", headerName: "Amount", width: 150, flex: 1 },
];
