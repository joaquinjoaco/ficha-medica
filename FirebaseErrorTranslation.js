export const translateError = (errCode) => {
     // Receives Firebase Auth error code and returns a proper message for the user.
     switch (errCode) {
          case "auth/invalid-email":
               return "Email inválido."

          case "auth/wrong-password":
               return "Contraseña incorrecta.";

          case "auth/user-not-found":
               return "No se encontró el usuario.";

          case "auth/too-many-requests":
               return "Demasiados intentos incorrectos, inténtalo más tarde.";

          case "auth/weak-password":
               return "La contraseña es muy débil. \nDebe tener al menos 6 caracteres.";

          case "auth/email-already-in-use":
               return "Este email ya está en uso.";

          case "auth/internal-error":
               return "Datos inválidos.";
          default:
               return errCode;

     }
}