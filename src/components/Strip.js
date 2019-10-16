import React, { Component } from 'react';
import { Arrow, StripTitle } from './styles/StripStyles';
import StripItem from './StripItem';

export default class Strip extends Component {
    render() {
        return (
            <>
                <StripTitle><Arrow>{this.props.title}</Arrow></StripTitle>
                <div className="glider-contain">
                    <div className="glider" id={this.props.list}>
                        {(this.props.films).map(film => 
                            <StripItem 
                                film={film} 
                                key={film + Math.random()}
                                progress={this.props.list === "continueWatching" ? `${Math.random() * (100 - 20) + 20}` : 0}
                            />
                        )}
                    </div>
                    <button aria-label="Previous" class="glider-prev">«</button>
                    <button aria-label="Next" class="glider-next">»</button>
                    <div role="tablist" class="dots"></div>
                </div>
            </>
        )
    }
}
