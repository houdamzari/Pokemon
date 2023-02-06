export const getTypeStyle = (type) => {
  let backgroundColor = "";
  switch (type) {
    case "grass":
      backgroundColor = "#9bcc50";
      break;
    case "poison":
      backgroundColor = "#b97fc9";
      break;
    case "fire":
      backgroundColor = "#fd7d24";
      break;
    case "flying":
      backgroundColor = "#3dc7ef";
      break;
    case "water":
      backgroundColor = "#4592c4";
      break;
    case "bug":
      backgroundColor = "#729f3f";
      break;
    case "normal":
      backgroundColor = "#a4acaf";
      break;
    case "electric":
      backgroundColor = "#eed535";
      break;
    case "ground":
      backgroundColor = "#ab9842";
      break;
    case "fairy":
      backgroundColor = "#fdb9e9";
      break;
    case "fighting":
      backgroundColor = "#d56723";
      break;
    case "psychic":
      backgroundColor = "#f366b9";
      break;
    case "rock":
      backgroundColor = "#a38c21";
      break;
    case "steel":
      backgroundColor = "#9eb7b8";
      break;
    case "ghost":
      backgroundColor = "#7b62a3";
      break;
    case "ice":
      backgroundColor = "#51c4e7";
      break;
    case "dragon":
      backgroundColor = "#f16e57";
      break;
    case "dark":
      backgroundColor = " #344FA1";
      break;
    default:
      backgroundColor = "#000";
      break;
  }
  return { backgroundColor };
};

export const getStatStyle = (stat) => {
  let backgroundColor = "";
  switch (stat) {
    case "hp":
      backgroundColor = "#CD2626";
      break;
    case "attack":
      backgroundColor = "#e75428";
      break;
    case "defense":
      backgroundColor = " #6AA84F";
      break;
    case "special-attack":
      backgroundColor = "#3dc7ef";
      break;
    case "special-defense":
      backgroundColor = "#4592c4";
      break;
    case "speed":
      backgroundColor = "#ffbec7";
      break;
    default:
      backgroundColor = "#000";
      break;
  }
  return { backgroundColor };
};
