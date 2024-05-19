import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const LibraryContent = () => {
  return (
    <section className="self-stretch box-border flex flex-col items-start justify-center pt-[30px] px-0 pb-7 max-w-full shrink-0 text-left text-13xl text-gray-400 font-nunito border-b-[1px] border-solid border-silver-100">
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq1300:flex-wrap">
        <div className="flex flex-col items-start justify-center gap-[10px] max-w-full">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[106px] mq450:text-lgi mq800:text-7xl">
            Library
          </h1>
          <h3 className="m-0 relative text-xl font-normal font-inherit text-gray-300 mq450:text-base">
            Research on scientific inquiry, technological innovation,
            engineering principles, and.
          </h3>
        </div>
        <TextField
          className="[border:none] bg-[transparent] h-11 w-[367px] font-nunito text-base text-gray-300 max-w-full"
          placeholder="Search your library"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <img width="24px" height="24px" src="/magesearch.svg" />
            ),
          }}
          sx={{
            "& fieldset": { borderColor: "#cacaca" },
            "& .MuiInputBase-root": {
              height: "44px",
              backgroundColor: "#fff",
              paddingLeft: "15px",
              borderRadius: "15px",
            },
            "& .MuiInputBase-input": { paddingLeft: "8px", color: "#7d7d7d" },
            width: "367px",
          }}
        />
      </div>
    </section>
  );
};

export default LibraryContent;
