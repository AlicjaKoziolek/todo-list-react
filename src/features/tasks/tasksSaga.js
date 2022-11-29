import {
  takeLatest,
  call,
  put,
  delay,
  select,
  takeEvery,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import {
  fetchExampleTasks,
  fetchExampleTasksError,
  fetchExampleTasksSuccess,
  selectTasks,
} from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    yield delay(500);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Uppss... Coś poszło nie tak! 😢");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
