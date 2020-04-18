import React, { useState, useEffect } from 'react'
import axios from 'axios'
import placeholder from '../img/placeholder.png'

const Mentorlist = () => {

    const [ mentors, setMentors ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const getMentors = async () => {
            try{
                const response = await axios.get('https://codesydney-mentors.herokuapp.com/api/v1/mentors')
                console.log(response.data.data.mentors)
                setMentors(response.data.data.mentors)
                setLoading(false)
            }
            catch(e){
                console.log(e.message)
            }
        }
        getMentors()
        
    },[])

    const getMentorPic = (mentor) => {

        return mentor.photo === true ?
            `https://codesydney-website.s3-ap-southeast-2.amazonaws.com/mentor/${mentor.id}.png`
            : placeholder

        
     
    }

    return(
        <>
            {loading === true && <>.....Loading</>}
            {
                mentors.map( mentor => {
                    return(
                    <div className="mentorList_card" key={mentor.id}>
                        <div className="mentorCard_pic">
                            <img height="300px" width="360px" src={getMentorPic(mentor)} alt="" />
                            <div className="mentorCard_title">
                                Title: {mentor.title}
                            </div>
                            <div className="mentorCard_fullname">
                                Full Name: {mentor.fullName}
                            </div>
                            <div className="mentorCard_description">
                                Description: {mentor.description}
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </>
        
        
    )



}

export default Mentorlist