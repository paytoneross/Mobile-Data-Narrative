(() => {
    //This is the logic for a <Filters /> HTML element
    const Filters = (props) => {
        let updateLikelyhoodTier = (clickEvent) => {
            props.updateFormState({
                tier: clickEvent.target.value,
            });
        }
        let updateOpeningSong = (clickEvent) => {
            props.updateFormState({
                open: clickEvent.target.value === '' ? null : clickEvent.target.value === 'true',
            });
        }
        let updateClosingSong = (clickEvent) => {
            props.updateFormState({
                close: clickEvent.target.value === '' ? null : clickEvent.target.value === 'true',
            });
        }
        let updateCoverSong = (clickEvent) => {
            props.updateFormState({
                cover: clickEvent.target.value === '' ? null : clickEvent.target.value === 'true',
            });
        }
        return (
            <React.Fragment>
                <h1>Filters</h1>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <b>Likelyhood</b>
                        </div>
                        <div className='col-md-2'>
                            <select
                                onChange={updateLikelyhoodTier}
                            >
                                <option value=''>&nbsp;</option>
                                <option value='Very Likely'>Very Likely</option>
                                <option value='Likely'>Likely</option>
                                <option value='Unlikely'>Unlikely</option>
                                <option value='Very Unlikely'>Very Unlikely</option>
                            </select>
                        </div>
                        <div className='col-md-1'></div>
                        <div className='col-md-1'></div>
                        <div className='col-md-3'>
                            <b>Cover Song?</b>
                        </div>
                        <div className='col-md-2'>
                            <select
                                onChange={updateCoverSong}
                            >
                                <option value=''>&nbsp;</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <b>Possible Opening Song?</b>
                        </div>
                        <div className='col-md-2'>
                            <select
                                onChange={updateOpeningSong}
                            >
                                <option value=''>&nbsp;</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                        </div>
                        <div className='col-md-1'></div>
                        <div className='col-md-1'></div>
                        <div className='col-md-3'>
                            <b>Possible Closing Song?</b>
                        </div>
                        <div className='col-md-2'>
                            <select
                                onChange={updateClosingSong}
                            >
                                <option value=''>&nbsp;</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    //This is the logic for a <DataTable /> HTML element
    const DataTable = (props) => {
        return (
            <div className="table-responsive">
                <table className="table table-dark table-striped songtable">
                    <tbody>
                        <tr>
                            <th>Song Name</th>
                            <th>Times Played</th>
                            <th>Likelyhood</th>
                            <th>Opener?</th>
                            <th>Closer?</th>
                            <th>Cover?</th>
                        </tr>
                        {props.dataToDisplay.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td>{row.name}</td>
                                    <td>{row.count}</td>
                                    <td>{row.tier}</td>
                                    <td>{row.open ? 'Yes' : 'No'}</td>
                                    <td>{row.close ? 'Yes' : 'No'}</td>
                                    <td>{row.cover ? 'Yes' : 'No'}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    class ReactDataTable extends React.Component {
        constructor(props) {
            super(props);

            this.originalData = props.originalData;

            this.state = {
                tier: '',
                open: null,
                close: null,
                cover: null,
            };

            this.updateFormState = this.updateFormState.bind(this);
        }

        updateFormState(specification) {
            this.setState(specification);
        }

        render() {
            let filteredData = this.originalData;

            if (this.state.tier !== '') {
                filteredData = filteredData.filter(
                    (row) => row.tier === this.state.tier
                );
            }

            if (this.state.open !== null) {
                filteredData = filteredData.filter(
                    (row) => row.open === this.state.open
                );
            }

            if (this.state.close !== null) {
                filteredData = filteredData.filter(
                    (row) => row.close === this.state.close
                );
            }

            if (this.state.cover !== null) {
                filteredData = filteredData.filter(
                    (row) => row.cover === this.state.cover
                );
            }

            return (
                <React.Fragment>
                    <Filters
                        updateFormState={this.updateFormState}
                    />

                    <hr />

                    <DataTable
                        dataToDisplay={filteredData}
                    />
                </React.Fragment>
            );
        }
    }

    const longSongData = [

        {
            "name": "(I Can't Get No) Satisfaction",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "1/2 Full",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "2000 Mile Blues",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Alive",
            "count": "30",
            "tier": "Very Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "All Along The Watchtower",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "All Night",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "All Or None",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "All The Way",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "All Those Yesterdays",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Alone",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Alright",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Amongst The Waves",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Angel",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Animal",
            "count": "3",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Another Brick In The Wall",
            "count": "7",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Arc",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Army Reserve",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Around The Bend",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Aya Davanita",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Baba O'Riley",
            "count": "9",
            "tier": "Unlikely",
            "open": false,
            "close": true,
            "cover": true
        },
        {
            "name": "Bee Girl",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Better Man",
            "count": "11",
            "tier": "Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Big Wave",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Black",
            "count": "18",
            "tier": "Likely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Black Red Yellow",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Blood",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Brain Of J",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Breakerfall",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Breath",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Brother",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Bu$hleager",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Buckle Up",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Bugs",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Can't Deny Me",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Can't Keep",
            "count": "1",
            "tier": "Very Unlikely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Comatose",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Come Back",
            "count": "3",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Comes Then Goes",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Corduroy",
            "count": "19",
            "tier": "Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Crazy Mary",
            "count": "4",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Cropduster",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Crown Of Thorns",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Dance of the Clairvoyants",
            "count": "3",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Dark Matter",
            "count": "27",
            "tier": "Very Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Daughter",
            "count": "18",
            "tier": "Likely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Dead Man",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Deep",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Dirty Frank",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Dissident",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Do The Evolution",
            "count": "25",
            "tier": "Very Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Don't Drive Me",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Don't Gimme No Lip",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Down",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Driftin",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Education",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Elderly Woman",
            "count": "15",
            "tier": "Likely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "The End",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Eruption",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Evacuation",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Even Flow",
            "count": "27",
            "tier": "Very Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Evil Little Goat",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Faithfull",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Falling Down",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Falling Slowly",
            "count": "3",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Fatal",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "The Fixer",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Footsteps",
            "count": "3",
            "tier": "Unlikely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Force Of Nature",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Fuck Me In The Brain",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Fuckin' Up",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Future Days",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Garden",
            "count": "5",
            "tier": "Unlikely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Get Right",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Getaway",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Ghost",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Gimme Some Truth",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Given To Fly",
            "count": "18",
            "tier": "Likely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Glorified G",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Go",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "God's Dice",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Gone",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Gonna See My Friend",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Got Some",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Got To Give",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Green Disease",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Gremmie Out Of Control",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Grievance",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Habit",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Hail Hail",
            "count": "3",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Hard To Imagine",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Help Help",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Her Majesty",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Hitchhiker",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Hold On",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Hurt",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "I Am A Patriot",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "I Am Mine",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "I Got Id",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "I Won't Back Down",
            "count": "6",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "It Ain't Like That",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "I'm Open",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Imagine",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Immortality",
            "count": "7",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "In Hiding",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "In My Tree",
            "count": "5",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "In The Moonlight",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Indifference",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": true,
            "cover": false
        },
        {
            "name": "Infallible",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Inside Job",
            "count": "4",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Insignificance",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Jeremy",
            "count": "13",
            "tier": "Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Johnny Guitar",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Just A Girl",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Just Breathe",
            "count": "8",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Keep Me In Your Heart",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Last Exit",
            "count": "4",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Last Kiss",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Leash",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Leatherman",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Leaving Here",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Let Me Sleep",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Let The Records Play",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Life Wasted",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Little Wing",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": true,
            "cover": true
        },
        {
            "name": "Light Years",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Lightning Bolt",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Long Road",
            "count": "3",
            "tier": "Unlikely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Love Boat Captain",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Low Light",
            "count": "7",
            "tier": "Unlikely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Lukin",
            "count": "5",
            "tier": "Unlikely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Man Of The Hour",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Mankind",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Marker In The Sand",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Maybe It's Time",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "MFC",
            "count": "3",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Mind Your Manners",
            "count": "6",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Modern Girl",
            "count": "7",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Monkey Gone To Heaven",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "My City Of Ruins",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "My Father's Son",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Never Destination",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "No More",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "No Way",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Not For You",
            "count": "6",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Nothing As It Seems",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Nothingman",
            "count": "4",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Oceans",
            "count": "2",
            "tier": "Very Unlikely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Of The Earth",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Of The Girl",
            "count": "4",
            "tier": "Unlikely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Off He Goes",
            "count": "4",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Ole",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Once",
            "count": "8",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Other Side",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Out Of My Mind",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Parachutes",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Parting Ways",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Pendulum",
            "count": "2",
            "tier": "Very Unlikely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Picture In A Frame",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Pilate",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Porch",
            "count": "22",
            "tier": "Very Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Present Tense",
            "count": "7",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Pry To",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Push Me Pull Me",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Quick Escape",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Rats",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "React Respond",
            "count": "27",
            "tier": "Very Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Rearviewmirror",
            "count": "8",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Red Dot",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Red Mosquito",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Release",
            "count": "5",
            "tier": "Unlikely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Retrograde",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Rival",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "River Cross",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Rockin In The Free World",
            "count": "15",
            "tier": "Likely",
            "open": false,
            "close": true,
            "cover": true
        },
        {
            "name": "Running",
            "count": "18",
            "tier": "Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Sad",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Satan's Bed",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Save It For Later",
            "count": "10",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Save You",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Scared Of Fear",
            "count": "22",
            "tier": "Very Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Setting Sun",
            "count": "18",
            "tier": "Likely",
            "open": false,
            "close": true,
            "cover": false
        },
        {
            "name": "Seven O'Clock",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Severed Hand",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Sick O' Pussies",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Sirens",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Sleeping By Myself",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Sleight Of Hand",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Smile",
            "count": "5",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Something Special",
            "count": "6",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Sometimes",
            "count": "2",
            "tier": "Very Unlikely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Song Of Good Hope",
            "count": "5",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Sonic Reducer",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Soon Forget",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Speed Of Sound",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Spin The Black Circle",
            "count": "4",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "State Of Love And Trust",
            "count": "6",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Stranglehold",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Stupid Mop",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Superblood Wolfmoon",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Supersonic",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Swallowed Whole",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Sweet Lew",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Take The Long Way",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "There She Goes",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Thin Air",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Throw Your Arms Around Me",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": "Thumbing My Way",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Tremor Christ",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "U",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Undone",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Unemployable",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Unthought Known",
            "count": "4",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Untitled",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Upper Hand",
            "count": "18",
            "tier": "Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "WMA",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Waiting For Stevie",
            "count": "15",
            "tier": "Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Wash",
            "count": "2",
            "tier": "Very Unlikely",
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": "Wasted Reprise",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Whale Song",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Whipping",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Who Ever Said",
            "count": "2",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Who You Are",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Why Go",
            "count": "13",
            "tier": "Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Wishlist",
            "count": "7",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Won't Tell",
            "count": "9",
            "tier": "Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "World Wide Suicide",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Wreckage",
            "count": "30",
            "tier": "Very Likely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "Yellow Ledbetter",
            "count": "16",
            "tier": "Likely",
            "open": false,
            "close": true,
            "cover": false
        },
        {
            "name": "Yellow Moon",
            "count": "0",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": "You Are",
            "count": "1",
            "tier": "Very Unlikely",
            "open": false,
            "close": false,
            "cover": false
        }
    ];

    const container = document.getElementById('react-data-table');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable originalData={longSongData} />);
})();