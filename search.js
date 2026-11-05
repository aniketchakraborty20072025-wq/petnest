/**
 * PetNest Search & Card Generation Module
 */

function createHostCard(host) {
  return `
    <article class="host-card">
      <img src="${host.image}" alt="${host.name}" class="host-card-img">
      <div class="host-card-body">
        <div class="host-card-header">
          <h3>${host.name} ${host.verified ? '✓' : ''}</h3>
          <span class="host-rating">⭐ ${host.rating} (${host.reviews})</span>
        </div>
        <div class="host-meta">
          <p>📍 ${host.location} (${host.distance} km away)</p>
          <p>🐾 ${host.petTypes.join(", ")}</p>
        </div>
        <div class="host-price">
          ₹${host.price} <span style="font-size: 0.8rem; font-weight: normal; color: var(--muted);">/ night</span>
        </div>
        <button class="btn btn-secondary" style="width: 100%;" onclick="viewHostDetails(${host.id})">
          View Profile
        </button>
      </div>
    </article>
  `;
}

function filterHosts(criteria) {
  return mockHosts.filter(host => {
    const matchesLocation = !criteria.location || 
      host.location.toLowerCase().includes(criteria.location.toLowerCase());
    
    const matchesPetType = !criteria.petType || 
      host.petTypes.includes(criteria.petType);

    const matchesPrice = !criteria.maxPrice || 
      host.price <= criteria.maxPrice;

    return matchesLocation && matchesPetType && matchesPrice;
  });
}

function viewHostDetails(hostId) {
  alert(`Navigating to profile for Host ID: ${hostId}`);
}