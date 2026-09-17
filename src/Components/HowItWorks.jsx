import React from 'react';
import { FaHourglassStart, FaSearch, FaUserGraduate, FaUsers } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '../Provider/ThemeProvider';
import { BsFillSendCheckFill } from 'react-icons/bs';
import { ImManWoman } from 'react-icons/im';
import { TbHeartHandshake } from 'react-icons/tb';

const HowItWorks = () => {
    const { theme } = useTheme();
    console.log(theme)
    return (
        <div className='pt-24'>
            <div>
                <h1 className='text-center text-heading font-[500] mb-6 text-5xl dark:text-heading2'>How It Works</h1>
                <div className='relative'>
                    <img className='theme-pink-image absolute lg:w-[250px] w-[150px] rotating left-[50%]' src="https://rn53themes.net/themes/matrimo/images/leaf/1.png" alt="" />
                    <img className='theme-pink-image absolute lg:w-[250px] w-[150px] rotating2 right-[50%]' src="https://rn53themes.net/themes/matrimo/images/leaf/1.png" alt="" />
                </div>
            </div>
            <div className='mt-[130px]'>
                <VerticalTimeline className='before:!bg-primary'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: theme ? "#2A0A1C" : "#FFF7FA", boxShadow: theme ? "0px 5px 500px -5px #BE185D" : "0px 5px 500px -5px #FBCFE8" }}
                        contentArrowStyle={{ borderRight: '10px solid #DB2777' }}
                        date="TIMING: 7:00 PM"
                        dateClassName={"text-heading dark:text-heading2"}
                        iconStyle={{ background: '#DB2777', color: '#fff' }}
                        icon={<FaHourglassStart />}
                    >
                        <h3 className=" text-3xl lg:!font-light text-heading dark:text-heading2">Register</h3>
                        <p className='  font-secondary !leading-[26px] text-Description dark:text-Description2 '>
                            Begin by creating an account on our platform. Fill out your profile details, including personal information and interests. This helps us match you with the most relevant profiles.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: theme ? "#2A0A1C" : "#FFFFFF", boxShadow: theme ? "0px 5px 500px -5px #BE185D" : "0px 5px 500px -5px #F9A8D4" }}
                        contentArrowStyle={{ borderRight: '10px solid #DB2777' }}
                        date="TIMING: 7:00 PM"
                        dateClassName={"text-heading dark:text-heading2"}
                        iconStyle={{ background: '#BE185D', color: '#fff' }}
                        icon={<FaSearch />}
                    >
                        <h3 className=" text-3xl font-light text-heading dark:text-heading2">Find Your Match</h3>
                        <p className='text-Description  font-secondary !leading-[26px] dark:text-Description2'>
                            Use our algorithm to find potential matches based on your preferences. Browse profiles using various filters to discover someone who aligns with your values and interests.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: theme ? "#2A0A1C" : "#FFF7FA", boxShadow: theme ? "0px 5px 500px -5px #BE185D" : "0px 5px 500px -5px #FBCFE8" }}
                        contentArrowStyle={{ borderRight: '10px solid #DB2777' }}
                        date="TIMING: 7:00 PM"
                        dateClassName={"text-heading dark:text-heading2"}
                        iconStyle={{ background: '#EC4899', color: '#fff' }}
                        icon={<BsFillSendCheckFill />}
                    >
                        <h3 className=" text-3xl font-light text-heading dark:text-heading2">Send Interest</h3>
                        <p className='text-Description  font-secondary !leading-[26px] dark:text-Description2'>
                            Express your interest in someone by sending a message. Break the ice and start a conversation with potential matches to show genuine interest and make a connection.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: theme ? "#2A0A1C" : "#FFFFFF", boxShadow: theme ? "0px 5px 500px -5px #BE185D" : "0px 5px 500px -5px #F9A8D4" }}
                        contentArrowStyle={{ borderRight: '10px solid #DB2777' }}
                        date="TIMING: 7:00 PM"
                        dateClassName={"text-heading dark:text-heading2"}
                        iconStyle={{ background: '#9D174D', color: '#fff' }}
                        icon={<FaUserGraduate />}
                    >
                        <h3 className=" text-3xl font-light  text-heading dark:text-heading2">Get Profile Information</h3>
                        <p className='text-Description  font-secondary !leading-[26px] dark:text-Description2'>
                            Access detailed information about your match's profile to learn about their background, interests, and partner preferences. Understand if you both share common goals and values.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: theme ? "#2A0A1C" : "#FFF7FA", boxShadow: theme ? "0px 5px 500px -5px #BE185D" : "0px 5px 500px -5px #FBCFE8" }}
                        contentArrowStyle={{ borderRight: '10px solid #DB2777' }}
                        date="TIMING: 7:00 PM"
                        dateClassName={"text-heading dark:text-heading2"}
                        iconStyle={{ background: '#F472B6', color: '#fff' }}
                        icon={<ImManWoman />}
                    >
                        <h3 className=" text-3xl font-light text-heading dark:text-heading2">Start Meetups</h3>
                        <p className='text-Description  font-secondary !leading-[26px] dark:text-Description2'>
                            Plan meetups in a safe environment to get to know each other better. Face-to-face interactions are essential for building a strong connection and understanding each other deeply.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: theme ? "#2A0A1C" : "#FFFFFF", boxShadow: theme ? "0px 5px 500px -5px #BE185D" : "0px 5px 500px -5px #F9A8D4" }}
                        contentArrowStyle={{ borderRight: '10px solid #DB2777' }}
                        date="TIMING: 7:00 PM"
                        dateClassName={"text-heading dark:text-heading2"}
                        iconStyle={{ background: '#DB2777', color: '#fff' }}
                        icon={<TbHeartHandshake />}
                    >
                        <h3 className=" text-3xl font-light text-heading dark:text-heading2">Getting Marriage</h3>
                        <p className='text-Description  font-secondary !leading-[26px]  dark:text-Description2'>
                            As your relationship grows, consider marriage. Our platform provides tips and resources to help you prepare for a lifelong commitment. Celebrate your love story and start your happily ever after.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default HowItWorks;
