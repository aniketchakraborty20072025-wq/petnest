/**
 * PetNest Mock Application Data
 */
const mockHosts = [
  {
    id: 1,
    name: "Happy Paws Home",
    location: "Kolkata",
    rating: 4.9,
    reviews: 82,
    price: 600,
    petTypes: ["Dogs"],
    verified: true,
    distance: 2.4,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Pet Paradise",
    location: "Kolkata",
    rating: 4.8,
    reviews: 54,
    price: 500,
    petTypes: ["Dogs", "Cats"],
    verified: true,
    distance: 4.1,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Cozy Tails Care",
    location: "Mumbai",
    rating: 4.7,
    reviews: 31,
    price: 750,
    petTypes: ["Cats"],
    verified: false,
    distance: 1.8,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Urban Pet Haven",
    location: "Kolkata",
    rating: 5.0,
    reviews: 112,
    price: 900,
    petTypes: ["Dogs"],
    verified: true,
    distance: 3.5,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80"
  }
];

// Initialize default session state if empty
if (!localStorage.getItem("petnestUser")) {
  const initialUser = {
    name: "Aniket",
    email: "aniket@example.com",
    isLoggedIn: false,
    role: "owner"
  };
  localStorage.setItem("petnestUser", JSON.stringify(initialUser));
}