export const translateError = (errCode) => {
     // Receives Firebase Auth error code and returns a proper message for the user.
     switch (errCode) {
          case "auth/invalid-email":
               return "Email inválido."

          case "auth/wrong-password":
               return "Contraseña incorrecta.";

          case "auth/user-not-found":
               return "No se encontró el usuario";

          case "auth/too-many-requests":
               return "Demasiados intentos incorrectos, inténtalo más tarde.";

          default:
               return errCode;

     }
}