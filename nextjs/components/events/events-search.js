import Button from '../ui/button';
import classes from './events-search.module.css'
import {useRef} from 'react'


function EventsSearch(props) {
function submitHandler(event) {
    
event.preventDefault();
}


    return <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.constrols}>
            <div className={classes.control}>
                <label htmlFor="year">Year</label>
                <select id='year'>
                    <options value='2021'>2021</options>
                    <options value='2022'>2022</options>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor="month"></label>
                <select id='month'>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">Octorber</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>
        </div>
        <Button>Find Events</Button>
    </form >
}

export default EventsSearch;