// 투두입력폼을 가져와서 submit(이벤트)을 눌렀을때, 함수실행
const todoForm = $("#todo-form");

// 투두입력 DOM 가져오기
const todoInput = $("#todo-form #todo-input");

// 완료한 할일 DOM 가져오기
const countText = $("#count");

// 완료한 할일 변수
let count = 0;

// todoForm.addEventListener("submit", todoAdd);
todoForm.on("submit", todoAdd);

// 실행될 함수 작성 : 투두리스트 추가
function todoAdd(e) {
  e.preventDefault();
  // 요소 생성
  const li = $("li");
  const checkBox = $("<input>");
  checkBox.attr("type", "checkbox");
  const text = $(todoInput.value);
  const button = $("<button>");
  button.html("X");

  // 요소를 li안에 추가
  li.append(checkBox);
  li.append(text);
  li.append(button);

  // todo-board에 li요소를 추가
  $("#todo-board").append(li);

  // todoInput의 값을 비우시
  todoInput.val("");

  // checkbox에 클릭이벤트- text색상 회색
  checkBox.on("click", todoCheck);
  // button에 클릭이벤트- li삭제
  button.on("click", todoDelete);
}

function todoCheck(e) {
  // 체크표시가 되면 text의 색상을 회색으로 바꿈
  // 체크박스에서 체크여부 알수있음
  // console.dir(e.target);
  if ($(this).prop("checked")) {
    $(this).parent().attr("style", "color:lightgray;");
  } else {
    $(this).parent().attr("style", "color:black;");
  }

  count = $("#todo-board li input:checked").length;
  countText.html(count);
}

function todoDelete(e) {
  $(this).parent().remove();
  count = $("#todo-board li input:checked").length;
  countText.html(count);
}
