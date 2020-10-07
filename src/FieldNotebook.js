import React from 'react';
import HTMLFlipBook from "react-pageflip";
import bubbleWindow from './images/bubbleWindow.png';
import fieldNotesLeft from './images/fieldNotesLeft.png'
import fieldNotesRight from './images/fieldNotesRight.png'

const FieldNotebook = (props) => {

    const styles = {
        backgroundImage:`url(${bubbleWindow})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        overflow: 'auto',
        width: '750px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }

    const titleStyles = {
        color: '#F3F793',
        fontFamily: 'goodUnicorn',
        fontSize: '5em',
        textShadow: '2px 2px black',
    }

    const bookStyles = {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '20%'
    }

    const leftPageStyles = {
        backgroundImage: `url(${fieldNotesLeft})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        height: '400px',
        paddingTop: '15%'
    }

    const rightPageStyles = {
        backgroundImage: `url(${fieldNotesRight})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        height: '400px',
        paddingTop: '15%'
    }

    return (
        <div id="field-notebook-container" style={styles}>
            <h1 style={titleStyles}>Field Notes</h1>
            <HTMLFlipBook width={300} height={400} style={bookStyles}>
                <div className="page">
                    <div className="page-content" style={leftPageStyles}>
                        <h2>Post 1</h2>
                        <p>Description</p>
                    </div>
                </div>
                <div className="page">
                    <div className="page-content" style={rightPageStyles}>
                        <h2>Post 2</h2>
                        <p>Description 2</p>
                    </div>
                </div>
                <div className="page">
                    <div className="page-content" style={leftPageStyles}>
                        <h2>Post 3</h2>
                        <p>Description 3</p>
                    </div>
                </div>
                <div className="page">
                    <div className="page-content" style={rightPageStyles}>
                        <h2>Post 4</h2>
                        <p>Description 4</p>
                    </div>
                </div>
                <div className="page">
                    <div className="page-content" style={leftPageStyles}>
                        <h2>Post 5</h2>
                        <p>Description 5</p>
                    </div>
                </div>
                <div className="page">
                    <div className="page-content" style={rightPageStyles}>
                        <h2>Post 6</h2>
                        <p>Description 6</p>
                    </div>
                </div>

            </HTMLFlipBook>
        </div>
    )
}

export default FieldNotebook;