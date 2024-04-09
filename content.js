const btnContainer = document.createElement("div");
btnContainer.style.position = "fixed";
btnContainer.style.bottom = "20px";
btnContainer.style.right = "20px";
btnContainer.style.display = "flex";
btnContainer.style.flexDirection = "column";
btnContainer.style.gap = "1rem";
document.documentElement.append(btnContainer);

const curProductInp = document.getElementById("txtItemCode");

function createBtn(text) {
  const btn = document.createElement("button");
  btn.style.cursor = "pointer";
  btn.style.padding = "1rem 2rem";
  btn.style.background = "white";
  btn.textContent = text;
  btn.style.border = "2px solid black";
  btn.style.borderRadius = "10px";
  btnContainer.append(btn);

  return btn;
}

const authBtn = createBtn("Add Auth");

const authName = "Deepak Ranjan Parida";

function fillAuth() {
  document.getElementById("txtReqSentByNm").value = authName;
  document.getElementById("txtReqAuthNm").value = authName;
  document.getElementById("txtIssuedByName").value = authName;
}

authBtn.addEventListener("click", fillAuth);

function addInput4Ref() {
  const inp = document.createElement("input");
  inp.placeholder = "product code";
  btnContainer.append(inp);
  inp.style.padding = "1rem";
  return inp;
}

const inputRef = addInput4Ref();

function changeReffn(e) {
  const val = e.currentTarget.value;
  document.getElementById("txtReqRefNum").value = val;
  document.getElementById("txtReqNum").value = val;
  document.getElementById("txtIssueNum").value = val;
  curProductInp.value = val;
}

inputRef.addEventListener("change", changeReffn);
