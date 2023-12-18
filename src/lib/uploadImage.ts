const handleUpload = (e) => {
  const selectedFile = e.target.files[0];
  const selectedType = ["image/png", "image/jpg", "image/jpeg"];
  const fileSize = 1048576;
  if (
    selectedFile &&
    selectedType.includes(selectedFile.type) &&
    selectedFile.size <= fileSize
  ) {
    setErrorMessage(false);
    console.log(selectedFile);
    const uploadTask = storage
      .ref()
      .child(`images/${selectedFile.name}`)
      .put(selectedFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        // setCaption("");
        // setProgressValue(progress)
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          // setProgressValue(0)
          console.log(
            "File available at",
            downloadURL,
            title,
            category,
            type,
            description
          );
          firestore.collection("blogs").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            ImgUrl: downloadURL,
            Title: title,
            Category: category,
            Type: type,
            description: description,
          });
        });
      }
    );
  } else {
    setErrorMessage(true);
  }
};
