const tour = document.getElementById("tour");
const notSupported = document.querySelector(".not_supported_container");

window.onload = () => {
  if (window.innerWidth < window.innerHeight) {
    tour.classList.add("none");
    notSupported.classList.remove("none");
  }
};

window.onresize = (e) => {
  if (window.innerWidth > window.innerHeight) {
    tour.classList.remove("none");
    notSupported.classList.add("none");
  } else {
    notSupported.classList.remove("none");
    tour.classList.add("none");
  }
};

pannellum.viewer("tour", {
  default: {
    firstScene: "beach",
    author: "Azizbek Mamarasulov",
    sceneFadeDuration: 1000,
    autoLoad: true,
  },

  scenes: {
    beach: {
      title: "Beach",
      hfov: 110,
      pitch: -3,
      yaw: 117,
      type: "equirectangular",
      panorama: "./assets/beach.jpg",
      hotSpots: [
        {
          pitch: 3.1,
          yaw: -25,
          type: "scene",
          text: "House Gate",
          sceneId: "house",
        },
        {
          pitch: 3.1,
          yaw: 23,
          type: "scene",
          text: "Neightbour's House",
          sceneId: "neightbourHouse",
        },
        {
          pitch: 0,
          yaw: 93,
          type: "scene",
          text: "Beach bridge",
          sceneId: "beachBridge",
        },
        {
          pitch: 0,
          yaw: -114,
          type: "scene",
          text: "Beach bridge",
          sceneId: "beachBridge2",
        },
      ],
    },

    beachBridge: {
      title: "Beach bridge",
      hfov: 300,
      yaw: -165,
      type: "equirectangular",
      panorama: "./assets/beachBridge.jpg",
      hotSpots: [
        {
          pitch: -8,
          yaw: -65,
          type: "scene",
          text: "Beach",
          sceneId: "beach",
          targetYaw: -23,
          targetPitch: 2,
        },
      ],
    },

    beachBridge2: {
      title: "Beach bridge",
      hfov: 110,
      yaw: 5,
      type: "equirectangular",
      panorama: "./assets/beachBridge2.jpg",
      hotSpots: [
        {
          pitch: 2,
          yaw: -5,
          type: "scene",
          text: "Beach",
          sceneId: "beach",
          targetYaw: -23,
          targetPitch: 2,
        },
      ],
    },

    house: {
      title: "House",
      hfov: 180,
      yaw: 180,
      type: "equirectangular",
      panorama: "./assets/house.jpg",
      hotSpots: [
        {
          pitch: 0,
          yaw: 47,
          type: "scene",
          text: "Beach",
          sceneId: "beach",
          targetYaw: -23,
          targetPitch: 2,
        },
        {
          pitch: 0,
          yaw: -53.7,
          type: "scene",
          text: "Kitchen",
          sceneId: "kitchen",
          targetYaw: -23,
          targetPitch: 2,
        },
      ],
    },

    kitchen: {
      title: "Kitchen",
      hfov: 110,
      yaw: 60,
      type: "equirectangular",
      panorama: "./assets/kitchen.jpg",
      hotSpots: [
        {
          pitch: -5,
          yaw: -42.5,
          type: "scene",
          text: "House",
          sceneId: "house",
          targetYaw: 0,          
          targetPitch: 0,
        }
      ]
    },

    neightbourHouse: {
      title: "Neighbour's House",
      hfov: 110,
      yaw: 5,
      type: "equirectangular",
      panorama: "./assets/neighbourHouse.jpg",
      hotSpots: [
        {
          pitch: -10,
          yaw: -178,
          type: "scene",
          text: "Beach",
          sceneId: "beach",
          targetYaw: -23,
          targetPitch: 2,
        },
      ],
    },
  },
});
