// memos list redux state
const initialState: any[] = [];

const addMemoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // get all memos from localstorage
    case "GET_ALL_MEMOS_FROM_LOCALSTORAGE":
      return [...action.payload];

    // add one memo
    case "ADD_MEMO":
      return [
        ...state,
        {
          id: action.payload.id,
          color: action.payload.color,
          content: action.payload.content,
          complete: false,
        },
      ];

    // "DELETE_MEMO"
    case "DELETE_MEMO":
      return state.filter((eachMemo) => eachMemo.id !== action.payload.id);

    // !complete
    case "TOGGLE_COMPLETE":
      return state.map(
        (eachMemo) =>
          eachMemo.id === action.payload.id
            ? {
                ...eachMemo, // each memo's keys before that
                complete: !eachMemo.complete, // then, only change the key 'complete'
              }
            : eachMemo // the currrent memo's id is not the chosen id of memo needed to be deleted
      );

    default:
      return state; // toggle insuccessful, return to redux the state
  }
};

export default addMemoReducer;
