function requireAuth(nextState, replaceState) {
  console.log(nextState, replaceState);
  var isLoggedIn = sessionStorage.getItem('jwtToken');
  console.log('isLoggedIn',isLoggedIn);
  if (!isLoggedIn) {
    // replaceState({ nextPathname: nextState.location.pathname }, '/login')
  }
}

module.exports = {
  requireAuth
};
