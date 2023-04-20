const HTTP = "http://";

const ROOT_LINK = HTTP + "journal/php/queries/";

const ROOT_LINK_TEACHER = ROOT_LINK + "teacher/";

export const ROOT_LINK_AUTHORIZATION = ROOT_LINK + "authorization.php";

// УЧИТЕЛЬ ------------------------------------------------

export const GET_GROUPS = ROOT_LINK_TEACHER + "selectGroups.php";
export const GET_DISCIPLINES = ROOT_LINK_TEACHER + "selectDisciplines.php";
export const GET_DATES = ROOT_LINK_TEACHER + "selectDates.php";
export const SET_TOPIC = ROOT_LINK_TEACHER + "updateTopic.php";
export const GET_TOPIC = ROOT_LINK_TEACHER + "selectLessonType.php";
export const GET_MARKS = ROOT_LINK_TEACHER + "selectMarksAndStudents.php";
export const UPDATE_MARK = ROOT_LINK_TEACHER + "updateMark.php";
export const GET_ABSOLUTE_KNOWLEDGE =
  ROOT_LINK_TEACHER + "selectAbsoluteKnowledge.php";
export const GET_QUALITY_KNOWLEDGE =
  ROOT_LINK_TEACHER + "selectQualityKnowledge.php";
