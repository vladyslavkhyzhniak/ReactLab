export default function AppReducer(state, action) {
  switch (action.type) {
    case "delete":
      return state.filter(person => person.id !== action.id);
    case "rate":
      return state.map(person => {
        if (person.id === action.id) {
          const currentRating = person.rating ?? 0;
          const newRating = currentRating === 10 ? 0 : currentRating + 1;
          return { ...person, rating: newRating };
        }
        return person;
      });
    case "check":
      return state.map(person => {
        if (person.id === action.id) {
          return { ...person, checked: !person.checked };
        }
        return person;
      });
    case "add":
      return [...state, { ...action.payload, id: Date.now() }];

    case "edit":
      return state.map(person =>
        person.id === action.payload.id ? { ...action.payload } : person
      );
    default:
      return state;
  }
}
