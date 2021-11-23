import React, { useState } from 'react'
import { useNavigate } from 'react-router';


const UploadForm = () => {

    const [fileData, setFileData] = useState();
    const [addMulter, setAddMulter] = useState(true);
    const navigate = useNavigate();
    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0]);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("image", fileData);
        fetch("http://localhost:3001/single", {
            method: "POST",
            body: data,
        })
            .then((result) => {
                console.log("File Sent Successful");
            })
            .catch((err) => {
                console.log(err.message);
            });
        setAddMulter(false)
        // navigate('')
    };

    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className='AP'>
            {addMulter
                ?
                <>
                    <h1>Загрузить видео/постер</h1>
                    <form onSubmit={onSubmitHandler}>
                        <input type="file" onChange={fileChangeHandler} />
                        <br />
                        <br />
                        <button type="submit">Submit File to Backend</button>
                    </form>
                </>
                :
                <>
                    <h1>Установить название\год\описание</h1>
                    <form component="form"
                        noValidate
                        autoComplete="off">
                        <div>
                            <input
                                placeholder="Title"
                                // value={value}
                                onChange={handleChange}
                            />
                            <input
                                placeholder="Year"
                            />
                        </div>
                        <input
                            label="Discriptions"
                            multiline
                            rows={4}
                            placeholder="Discriptions"

                        />
                        <div>
                            <button>Send</button>
                        </div>
                    </form>
                </>
            }
        </div>
    )
}

export default UploadForm