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
                <p><b>Filter your data here:</b></p>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-1'></div>
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
                        <div className='col-md-3'></div>
                        <div className='col-md-2'></div>
                        <div className='col-md-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col-md-1'></div>
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
                        <div className='col-md-3'></div>
                        <div className='col-md-2'></div>
                        <div className='col-md-1'></div>
                    </div>
                    <div className='row'>
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
                        <div className='col-md-3'></div>
                        <div className='col-md-2'></div>
                        <div className='col-md-1'></div>
                    </div>
                    <div className='row'>
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
                        <div className='col-md-3'></div>
                        <div className='col-md-2'></div>
                        <div className='col-md-1'></div>
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
    const songData = [
        {
            "name": "1/2 Full",
            "count": "1",
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
            "name": 'All Along The Watchtower',
            "count": '1',
            "tier": 'Very Unlikely',
            "open": false,
            "close": false,
            "cover": true
        },
        {
            "name": 'All Night',
            "count": '2',
            "tier": 'Very Unlikely',
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": 'All Or None',
            "count": '0',
            "tier": 'Very Unlikely',
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": 'All Those Yesterdays',
            "count": '1',
            "tier": 'Very Unlikely',
            "open": false,
            "close": false,
            "cover": false
        },
        {
            "name": 'Release',
            "count": '5',
            "tier": 'Unlikely',
            "open": true,
            "close": false,
            "cover": false
        },
        {
            "name": 'Yellow Ledbetter',
            "count": '16',
            "tier": 'Likely',
            "open": false,
            "close": true,
            "cover": false
        },
    ];
    const container = document.getElementById('react-data-table');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable originalData={songData} />);
})();