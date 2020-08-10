import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
  useCallback
} from "react";

const StateContext = createContext({});

const initialState = {
  startseite: "Willkommen",
  news: [
    {
      title: "News1",
      content: "Lorem ipsum bre"
    },
    {
      title: "News2",
      content: "Lorem ipsum bre"
    },
    {
      title: "News3",
      content: "Lorem ipsum bre"
    },
    {
      title: "News4",
      content: "Lorem ipsum bre"
    },
    {
      title: "News5",
      content: "Lorem ipsum bre"
    },
    {
      title: "News6",
      content: "Lorem ipsum bre"
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "AREA_ENTER":
      return {
        ...state,
        startseite: "Startseite"
      };
    case "AREA_LEAVE":
      return {
        ...state,
        startseite: "Startseite"
      };
    default:
      return state;
  }
}

function StateProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const areaEnterHandler = () => dispatch({ type: "AREA_ENTER" });
  const areaLeaveHandler = () => dispatch({ type: "AREA_LEAVE" });

  const contextValues = {
    startseite: state.startseite,
    news: state.news,
    areaEnterHandler,
    areaLeaveHandler
  };

  return (
    <StateContext.Provider value={contextValues}>
      {children}
    </StateContext.Provider>
  );
}

const useAppState = () => useContext(StateContext);

export { useAppState, StateProvider };
