export const NOTIFICATIONS = {
  success: {
    type: "success",
    message: "Success creating your deck"
  },
  error: ({ message }) => ({
    type: "error",
    message: `There was a problem creating your event ${message}`
  })
};
