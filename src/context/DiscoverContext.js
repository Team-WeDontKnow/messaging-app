import { useState, createContext } from 'react';

// create your context
const DiscoverContext = createContext()

export const DiscoverProvider = ({children}) => {
    
    /* Setting the initial state of the context. */
    const [users, setUsers] = useState(null)
    const [singleUser, setSingleUser] = useState(null)
    const [singleModal, setSingleModal] = useState(false)
    const [searchModal, setSearchModal] = useState(false)
    const [distance, setDistance] = useState('25')
    const [age1, setAge1] = useState('18')
    const [age2, setAge2] = useState('100')
    const [gender, setGender] = useState('male')
    const [index1, setIndex1] = useState(1)
    const [index2, setIndex2] = useState(24)
    const [pages, setPages] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])

    /**
     * "addUsers" is a function that takes in a parameter called "data" and then sets the state of
     * "users" to the value of "data".
     * 
     * "addSingleUser" is a function that takes in a parameter called "data" and then sets the state of
     * "singleUser" to the value of "data".
     */
    const addUsers = (data) => {
        setUsers(data);
    }
    const addSingleUser = (data) => {
        setSingleUser(data);
    }
    
    
    /* Returning the context provider with the value of the context. */
    return <DiscoverContext.Provider value={{
        users,
        addUsers,
        singleUser,
        addSingleUser,
        singleModal,
        setSingleModal,
        searchModal,
        setSearchModal,
        distance,
        setDistance,
        age1,
        age2,
        setAge1,
        setAge2,
        gender,
        setGender,
        pages,
        index1,
        index2,
        setIndex1,
        setIndex2
    }}>
        {children}
    </DiscoverContext.Provider>
}

export default DiscoverContext