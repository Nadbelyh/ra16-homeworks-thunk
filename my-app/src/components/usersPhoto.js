import moment from "moment/moment";
import { nanoid } from "nanoid";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsersPhoto } from "../features/usersPhoto/usersPhotoSlice";

function UsersPhoto() {
  const fileRef = useRef();
  const dispatch = useDispatch();
  const { usersPhotoArr } = useSelector((state) => state.usersPhoto);
  const [selectedFile, setSelectedFile] = useState(null);
  const [sortArr, setSortArr] = useState([]);

  useEffect(() => {
    const newSortArr = [...usersPhotoArr].sort(
      (a, b) => b["timeUpload"] - a["timeUpload"]
    );

    setSortArr(newSortArr);
  }, [usersPhotoArr]);

  const handleSelect = () => {
    const data = {
      id: nanoid(),
      name: fileRef.current.files[0].name,
      timeUpload: moment().valueOf(),
      file: URL.createObjectURL(fileRef.current.files[0]),
    };

    setSelectedFile(data);
  };

  const hendleUpload = (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    dispatch(addUsersPhoto(selectedFile));

    setSelectedFile(null);
    fileRef.current.value = null;
  };

  return (
    <div>
      <form id="form" onSubmit={hendleUpload} className="form">
        <input
          type="file"
          name="files"
          accept="image/*"
          ref={fileRef}
          onChange={handleSelect}
        />
        <button className="button">Загрузить фото</button>
      </form>

      <ul className="photos">
        {sortArr &&
          sortArr.map((image) => (
            <li key={image.id}>
              <img
                src={image.file}
                alt={image.name}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default UsersPhoto;
