// // const sessionIdToUserMap = new Map();

// // function setUser(id, user){
// //     sessionIdToUserMap.set(id, user);
// // }

// // function getUser(id){
// //     return sessionIdToUserMap.get(id);
// // }

// // module.exports = {
// //     setUser, getUser,
// // }

// const sessionIdToUserMap = new Map();

// function setUser(id, user) {
//     sessionIdToUserMap.set(id, user);
//     console.log("Session Map After setUser:", sessionIdToUserMap); // Log it here instead
// }

// function getUser(id) {
//     return sessionIdToUserMap.get(id);
// }

// module.exports = {
//     sessionIdToUserMap,  // Export this map
//     setUser, 
//     getUser
// };

global.sessionIdToUserMap = global.sessionIdToUserMap || new Map();

function setUser(id, user) {
    if (!global.sessionIdToUserMap) {
        global.sessionIdToUserMap = new Map();
    }
    
    console.log(`Setting User in Map: ${id}`, user);
    global.sessionIdToUserMap.set(id, user);

    console.log("Session Map After setUser:", global.sessionIdToUserMap);
}

function getUser(id) {
    console.log("Fetching user for session ID:", id);

    if (!global.sessionIdToUserMap) {
        console.log("Session Map not initialized!");
        global.sessionIdToUserMap = new Map(); // This will reset it
    }

    console.log("Current Session Map:", global.sessionIdToUserMap);
    return global.sessionIdToUserMap.get(id);
}

module.exports = { setUser, getUser };

