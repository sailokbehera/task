import React, { Component } from 'react';
import {Typography} from "@mui/material";
class DragAndDrop extends Component {
    state = {
        drag: false,
    };
    dropRef = React.createRef();
    fileRef = React.createRef();
    handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    handleDragIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ drag: true });
    };
    handleDragOut = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ drag: false });
    };
    handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ drag: false });
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        if (files && files.length > 0) {
            this.props.handleDrop(files);
            e.dataTransfer.clearData();
        }
    };
    onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            this.props.handleDrop(files[0]);
        };
        reader.readAsDataURL(files[0]);
    };
    componentDidMount() {
        let div = this.dropRef.current;
        div.addEventListener('dragenter', this.handleDragIn);
        div.addEventListener('dragleave', this.handleDragOut);
        div.addEventListener('dragover', this.handleDrag);
        div.addEventListener('drop', this.handleDrop);
    }
    componentWillUnmount() {
        let div = this.dropRef.current;
        div.removeEventListener('dragenter', this.handleDragIn);
        div.removeEventListener('dragleave', this.handleDragOut);
        div.removeEventListener('dragover', this.handleDrag);
        div.removeEventListener('drop', this.handleDrop);
    }
    render() {
        return (
            <div
                ref={this.dropRef}
                style={{ display: 'inline-block', position: 'relative', width: '99%' }}
            >
                <div
                    style={{
                        border: this.state.drag ? 'dashed black 1px' : 'none',
                        backgroundColor:this.state.drag ? 'rgba(255,255,255,.8)' :'transparent',
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1,
                    }}
                >
                    {this.state.drag && <center><Typography>Drop your image here</Typography></center>}
                    <div
                        style={{
                            position: 'absolute',
                            top: '35%',
                            right: 0,
                            left: 0,
                            textAlign: 'center',
                            color: this.state.drag ? 'black' : 'grey',
                            fontSize: 28,
                        }}
                    >
                        <input
                            accept="image/png, image/jpeg"
                            onChange={this.onChange}
                            ref={this.fileRef}
                            style={{ display: 'none' }}
                            type="file"
                        />
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}
export default DragAndDrop;
