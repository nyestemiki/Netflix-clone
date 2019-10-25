import React, { Component } from 'react';
import { Arrow, StripTitle } from './styles/StripStyles';
import StripItem from './StripItem';

export default class Strip extends Component {
    render() {
        let counter = 0;
        return (
            <>
                <StripTitle><Arrow>{this.props.title}</Arrow></StripTitle>
                <div className="glider-contain">
                    <div className="glider" id={this.props.list}>
                        {(this.props.films).map(film => 
                            <StripItem 
                                film={film}
                                number={this.props.list + counter} 
                                firstInList={counter === 0}
                                lastInList={counter === (this.props.films).length-1}
                                key={film + counter++}
                                nrItems={(this.props.films).length}
                                progress={this.props.list === "continueWatching" ? `${Math.random() * (100 - 20) + 20}` : 0}
                            />
                        )}
                    </div>
                    <div role="tablist" className="dots"></div>
                </div>
            </>
        )
    }
}
