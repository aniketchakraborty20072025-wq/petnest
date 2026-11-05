/**
 * PetNest Main UI Controller
 */
document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("mainSearchForm");
  const hostResultsGrid = document.getElementById("hostResultsGrid");
  const authNavSection = document.getElementById("authNavSection");

  // Render Auth UI in Navbar
  const currentUser = JSON.parse(localStorage.getItem("petnestUser"));
  renderNavbarAuth(currentUser);

  // Initial load: render all hosts
  renderHostsList(mockHosts);

  // Handle Search Submission
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const searchCriteria = {
        location: document.getElementById("searchLocation").value,
        petType: document.getElementById("searchPetType").value,
        maxPrice: Number(document.getElementById("searchMaxPrice").value) || null
      };

      const filteredResults = filterHosts(searchCriteria);
      renderHostsList(filteredResults);
    });
  }

  function renderHostsList(hosts) {
    if (!hostResultsGrid) return;
    
    if (hosts.length === 0) {
      hostResultsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--muted);">No pet hosts found matching your criteria.</p>`;
      return;
    }

    hostResultsGrid.innerHTML = hosts.map(host => createHostCard(host)).join("");
  }

  function renderNavbarAuth(user) {
    if (!authNavSection) return;

    if (user && user.isLoggedIn) {
      authNavSection.innerHTML = `
        <div class="user-profile-menu">
          <div class="user-avatar">${user.name.charAt(0)}</div>
          <span>${user.name}</span>
        </div>
      `;
    } else {
      authNavSection.innerHTML = `
        <a href="pages/login.html" class="nav-link">Login</a>
        <a href="pages/register.html" class="btn btn-primary">Sign Up</a>
      `;
    }
  }
});