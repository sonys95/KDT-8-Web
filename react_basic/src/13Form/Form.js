import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //handleSubmit : 두개의 함수를 받는데 하나는 유효할때 실행되는 함수(필수), 유효하지 않을때 실행되는 함수(선택)

  const onValid = (data) => {
    console.log(data);
  };
  const onInvalid = (error) => {
    console.log("err", error);
  };

  //console.log(watch());
  console.log("--------error----------- ", errors);

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          {...register("username", {
            required: "이름을 입력하세요",
            minLength: { message: "최소 2글자 이상 적어주세요.", value: 2 },
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          {...register("email", {
            required: "이메일을 입력하세요",
            validate: {
              useGmail: (value) => {
                return value.includes("gmail.com");
              },
            },
          })}
        />
        <br />
        <input type="text" {...register("password")} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
