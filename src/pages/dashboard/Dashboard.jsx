import React, {
    //  useEffect,
    useRef, useState
} from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";

import FolderCard from "../../components/FolderCard/FolderCard";
import CustomeTable from "../../components/table/CustomeTable";
import CustomeMenu from "../../components/Menu/CustomeMenu";
// import DashboardHeader from "./header";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import { toast } from "react-toastify";
// import { folder } from "../../../services/folder";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
// import FolderIcon from "@mui/icons-material/Folder";

import file from "../../assets/images/file.png";
import kids2old from "../../assets/images/kids2old.png";
import mission2old from "../../assets/images/mission2old.jpg";
import logo from "../../assets/images/logo.png";
// import { getFolder } from "../../../redux-store/features/dashboard";
import CustomModal from "../../components/modal/CustomModal"
import Loader from "../../assets/loader/Loader";
// import ToastNotification from "../../../components/other-component/toastify";
// import { useNavigate } from "react-router-dom";
// import { Inputs } from "../../assets/input/Inputs";
import { Buttons } from "../../components/button/Buttons";
import icons from "../../assets/icons/icons";
import webColor from "../../assets/colors/Colors";
import Selects from "../../assets/select/Selects";

// const initialValue = {
//   name: "",
//   image: "",
// };

// const validationSchema = yup.object({
//   name: yup.string().required("Please enter folder title"),
// });

const Dashboard = () => {
    const [isSelected, setIsSelected] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectImage, setSelectImage] = useState(null);
    const [isLoading, setIsloading] = useState(false);
    const [folderName, setFolderName] = useState(' ');

    const handleSelectValue = (newValue) => {
        if (newValue) {  // Ensure newValue and target are defined
            setFolderName(newValue);  // Pass selected value back to parent
          } 
          
          
          console.log("folderName>>>", folderName);
        };
    
    const inputRef = useRef(null);
    //   const dispatch = useDispatch();
    //   const navigation = useNavigate();

    //   const { user } = useSelector((state) => state.auth);


    const cardDetail = [
        {
            id: "1",
            isAllow: true,
            image: file
        },
        {
            id: "2",
            isAllow: true,
            image: kids2old
        },
        {
            id: "3",
            isAllow: true,
            image: mission2old
        },
    ];
    //   const { cardDetail } = useSelector((state) => state?.dashboard);

    const menu = [
        {
            id: 1,
            title: "Profile",
            onClick: (() => {
                console.log("ok Profile");
            }),


        },
        {
            id: 2,
            title: "Account",
            onClick: (() => {
                console.log("ok Profile");
            }),

        },
        {
            id: 3,
            title: "Settings",
            onClick: (() => {
                console.log("ok Profile");
            }),

        },
    ];

    const columns = [
        {
            Header: "Name",
            accessor: "name",
            Cell: ({ row }) => {
                return (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box
                            sx={{
                                width: "17px",
                                height: "15px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={file}
                                alt="file"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    color: "red",
                                    filter:
                                        row.shared_users === "N/A"
                                            ? "invert(1) sepia(50%) saturate(10%) hue-rotate(150deg)"
                                            : "none",
                                }}
                            />
                        </Box>
                        <Typography>{row.name}</Typography>
                    </Box>
                );
            },
        },
        {
            Header: "Shared Users",
            accessor: "shared_users",
        },
        {
            Header: "File Size",
            accessor: "file_size",
        },
        {
            Header: "Last Modified",
            accessor: "last_modified",
            Cell: ({ row }) => {
                return (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                        <Typography>{row.last_modified}</Typography>
                        <Box>
                            <CustomeMenu
                                isAllow={true}
                                icon={<MoreVertIcon sx={{}} />}
                                options={menu}
                            />
                        </Box>
                    </Box>
                );
            },
        },
    ];

    const row = [
        {
            name: "john",
            shared_users: "john234@gmail.com",
            file_size: "2.8MB",
            last_modified: "Dec 15, 2024",
        },
        {
            name: "smith",
            shared_users: "N/A",
            file_size: "2.8MB",
            last_modified: "Dec 15, 2024",
        },
        {
            name: "jayden",
            shared_users: "daren564@gmail.com",
            file_size: "2.8MB",
            last_modified: "Dec 15, 2024",
        },
        {
            name: "jayden",
            shared_users: "N/A",
            file_size: "2.8MB",
            last_modified: "Dec 15, 2024",
        },
        {
            name: "jayden",
            shared_users: "smith74@gmail.com",
            file_size: "2.8MB",
            last_modified: "Dec 15, 2024",
        },
    ];

    const menueItems=[
        {
        id:1,
        menueName:"Music List Folder",
        optionValue:"MusicListFolder"
    },
        {
        id:2,
        menueName:"Audio Links Folder",
        optionValue:"AudioLinksFolder",
    },
        {
        id:3,
        menueName:"Medical Documents Folder",
        optionValue:"MedicalDocumentsFolder",
    },
        {
        id:4,
        menueName:"Images Folder",
        optionValue:"ImagesFolder",
    },
]

    const handleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    //   useEffect(() => {
    //     dispatch(getFolder());
    //   }, []);

    const handleFolderCard = (id) => {
        setIsSelected((prev) => (prev === id ? null : id));
        // navigate(`/user_details/${id}`);
    };

    const body = () => {
        const handleImageChange = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    setSelectImage(reader.result);
                    //   formik.setFieldValue("image", file);
                };
                reader.readAsDataURL(file);
            }
        };

        const handleClick = () => {
            inputRef.current.click();
          

        };

        const onSubmit = async (value) => {
            setIsloading(true);
            setTimeout(() => {
                setIsloading(false);

            }, 3000);



            
    ////ya use hoga submition ka waqt

    // const formData = new FormData();
    //   formData.append("description", isPlan.description);
    //   formData.append("imageFile", isPlan.imageFile);

//////close///////


            //   try {
            //     setIsloading(true);
            //     const formData = new FormData();
            //     formData.append("name", values?.name);
            //     formData.append("image", values?.image);
            //     const response = await folder.createFolder(formData);
            //     toast.success(response?.message);
            //     // setOpen(true);
            //     return response;
            //   } catch (error) {
            //     console.log(error);
            //   } finally {
            //     setIsloading(false);
            //     // formik.resetForm();
            //     setIsModalOpen(false);
            //   }
        };

        // const formik = useFormik({
        //   initialValues: initialValue,
        //   validationSchema: validationSchema,
        //   onSubmit: (value) => onSubmit(value),
        // });

        // const { handleChange, handleSubmit, values, errors } = formik;
        // const handleChange=(() => {
        //     const getInputValue=inputRef.current.value
        //     console.log("getInputValue>>>", getInputValue);
            
        // })

        return (
            <>
                {/* <ToastNotification /> */}
                <Box
                    sx={{
                        // backgroundColor: "#FDB515",
                        backgroundColor: "white",
                        // backgroundColor: "#98c1d9",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            pr: 2,
                            pt: 2,
                            cursor: "pointer",
                        }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <CloseIcon size="22" sx={{ color: "#fff" }} />
                    </Box>
                    {isLoading ? (
                        <div className="py-5">

                            <Loader loading={isLoading} /></div>
                    ) : (
                        <Box sx={{ px: { sm: 4, xs: 1, md: 10 }, py: { sm: 1, xs: 1 } }}>
                            <Box sx={{ width: "15rem", height: "8rem", margin: "0 auto" }}>
                                <img
                                    src={logo}
                                    alt=""
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </Box>

                            <Box sx={{ pb: 1 }}>
                                <form
                                //   onSubmit={onSubmit}
                                //   onSubmit={handleSubmit}
                                >
                                    {/* <Inputs
                                        placeholder="Enter Title"
                                        label="Folder Title"
                                        inputWidth="100%"
                                        style={{ color: "#fff" }}
                                        startIcon={true}
                                        icon={<FolderIcon />}
                                        ref={inputRef}
                                        //   value={values?.name}
                                        //   onChange={handleChange}
                                        name="name"
                                        type="text"
                                    //   error={errors?.name}
                                    /> */}
                                    <Selects  menueItems={menueItems} value={folderName} onChange={handleSelectValue} inputLabel="Folder Name" iconName={icons.createNewFolderIcons} />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 10,
                                            justifyContent: { sm: "space-between" },
                                        }}
                                    >
                                        <Box>
                                            <Button
                                                outline
                                                style={{ backgroundColor: "transparent" }}
                                                onClick={handleClick}
                                            >
                                                Upload 
                                            </Button>
                                            <input
                                                type="file"
                                                ref={inputRef}
                                                style={{ display: "none" }}
                                                onChange={handleImageChange} 
                                                accept="image/*"
                                            />
                                            <br />
                                            {/* {errors.image && (
                      <Typography variant="caption" color="error">
                        {errors.image}
                      </Typography>
                    )} */}
                                        </Box>
                                        <Box
                                            sx={{ width: { md: "12rem", sm: "8rem" }, my: 2, height: "5rem" }}
                                        >
                                            {selectImage && <div className="text-end " style={{ cursor: "pointer" }} onClick={() => setSelectImage(null)}>{icons.cancelIcons}</div>}
                                            <img
                                                src={selectImage || logo}
                                                alt="userimage"
                                                style={{ width: "100%", height: "100%" }}
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "flex-start",
                                        }}
                                    >

                                        <Buttons
                                            title="Create Folder"
                                            style={{
                                                backgroundColor: webColor.themeColor
                                            }}
                                            text="Submit"
                                            //   type="submit"
                                            onClick={onSubmit}
                                        />

                                    </Box>
                                </form>
                            </Box>
                        </Box>)}
                </Box>
            </>
        );
    };

    return (
        <div>
            <Stack sx={{ mx: { md: 6, sm: 3, xs: 1 } }}>
                <Box sx={{ my: 4 }}>
                    {/* <DashboardHeader
            title={`Welcom Back, ${user?.full_name}`}
            onClick={handleModal}
            memories={() => navigation("/memories")}
          /> */}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        // justifyContent: "flex-end",
                        alignSelf: "end",
                        mb: 4,
                    }}
                >
                    <Buttons
                        variant="outlined"
                        text="Create Folder"
                        startIcon={icons.createNewFolderIcons}
                        style={{
                            //   borderColor: "blue",
                            //   borderColor: colors?.primary,
                            color: "white",
                            //   color: colors?.primary,


                            gap: 2,
                            fontWeight: 500,
                            backgroundColor: webColor.themeColor

                        }}
                        onClick={handleModal}
                    />

                </Box>
                <Box className="d-flex align-items-center justify-content-between mb-4">
                    <Box className="">
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Folders
                        </Typography>
                    </Box>
                    <Box sx={{ cursor: "pointer" }}>
                        <Typography
                            sx={{
                                color: webColor.themeColor,
                                // color: colors.primary,
                                borderBottom: `1px solid ${webColor.themeColor}`,
                                // borderBottom: `1px solid ${colors.primary}`,
                                fontWeight: 550,
                            }}
                        >
                            View All
                        </Typography>
                    </Box>
                </Box>
                <Box className="row mb-3" sx={{ display: "flex", flexWrap: "wrap" }}>
                    {cardDetail?.length > 0 ? (
                        cardDetail.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className="col-md-3 col-sm-6 col-xs-12 mb-4"
                                    onClick={() => handleFolderCard(data.id)}
                                >
                                    <FolderCard
                                        item={data}
                                        title={data?.name}
                                        isSelected={data.id === isSelected}
                                        isAllow={true}
                                        image={data?.image}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <Typography variant="body1">No records found.</Typography>
                    )}
                </Box>
            </Stack>
            {/* <Stack sx={{ mx: { md: 6, sm: 3, xs: 1 }, mb: 2 }}>
               
                <CustomeTable columns={columns} rows={row} title="Folders" />
            </Stack> */}
            <CustomModal
                open={isModalOpen}
                handleClose={() => setIsModalOpen(false)}
                body={body}
            />
        </div>
    );
};

export default Dashboard;
