import {DbConstants} from '../../db';

export namespace ProfileEntry {

    export const _ID = '_id';
    export const TABLE_NAME = 'profiles';
    export const COLUMN_NAME_UID = 'uid';
    export const COLUMN_NAME_HANDLE = 'handle';
    export const COLUMN_NAME_CREATED_AT = 'created_at';
    export const COLUMN_NAME_MEDIUM = 'medium';
    export const COLUMN_NAME_BOARD = 'board';
    export const COLUMN_NAME_SUBJECT = 'subject';
    export const COLUMN_NAME_PROFILE_TYPE = 'profile_type'; // default TEACHER
    export const COLUMN_NAME_GRADE = 'grade';
    export const COLUMN_NAME_SYLLABUS = 'syllabus';
    export const COLUMN_NAME_SOURCE = 'source';
    export const COLUMN_NAME_GRADE_VALUE = 'grade_value';

    export interface SchemaMap {
        [COLUMN_NAME_UID]: string;
        [COLUMN_NAME_HANDLE]: string;
        [COLUMN_NAME_CREATED_AT]: number;
        [COLUMN_NAME_MEDIUM]: string;
        [COLUMN_NAME_BOARD]: string;
        [COLUMN_NAME_SUBJECT]: string;
        [COLUMN_NAME_PROFILE_TYPE]: string;
        [COLUMN_NAME_GRADE]: string;
        [COLUMN_NAME_SYLLABUS]: string;
        [COLUMN_NAME_SOURCE]: string;
        [COLUMN_NAME_GRADE_VALUE]: string;
    }

    export const getCreateEntry: () => string = () => {
        return 'CREATE TABLE IF NOT EXISTS ' + TABLE_NAME + '(' +
            ProfileEntry._ID + DbConstants.SPACE + 'INTEGER PRIMARY KEY,' +
            COLUMN_NAME_UID + DbConstants.SPACE + DbConstants.TEXT_TYPE + ' UNIQUE NOT NULL' + DbConstants.COMMA_SEP +
            COLUMN_NAME_HANDLE + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_CREATED_AT + DbConstants.SPACE + DbConstants.DATE_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_MEDIUM + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_BOARD + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_SUBJECT + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_PROFILE_TYPE + DbConstants.SPACE + DbConstants.TEXT_TYPE + ' DEFAULT "teacher"' + DbConstants.COMMA_SEP +
            COLUMN_NAME_GRADE + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_SYLLABUS + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_SOURCE + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_GRADE_VALUE + DbConstants.SPACE + DbConstants.TEXT_TYPE +
            ')';
    };
    export const deleteTable: (() => string) = () => {
        return 'DROP TABLE IF EXISTS ' + ProfileEntry.TABLE_NAME;

    };

    export const getAlterEntryForProfileSyllabus: (() => string) = () => {
        return 'ALTER TABLE ' + TABLE_NAME + ' ADD COLUMN ' + DbConstants.SPACE +
            ProfileEntry.COLUMN_NAME_SYLLABUS + DbConstants.TEXT_TYPE + '  DEFAULT \'\';';

    };
}

export namespace UserEntry {

    export const _ID = '_id';
    export const TABLE_NAME = 'users';
    export const COLUMN_NAME_UID = 'uid';

    export const getCreateEntry: (() => string) = () => {
        return 'CREATE TABLE ' + UserEntry.TABLE_NAME + ' (' +
            UserEntry._ID + ' INTEGER PRIMARY KEY,' +
            UserEntry.COLUMN_NAME_UID + DbConstants.SPACE + DbConstants.TEXT_TYPE +
            ' )';
    };

    export const deleteTable: (() => string) = () => {
        return 'DROP TABLE IF EXISTS ' + UserEntry.TABLE_NAME;

    };
}

export namespace GroupProfileEntry {

    export const TABLE_NAME = 'group_profile';
    export const _ID = '_id';
    export const COLUMN_NAME_UID = 'uid';
    export const COLUMN_NAME_GID = 'gid';

    export interface SchemaMap {
        [COLUMN_NAME_UID]: string;
        [COLUMN_NAME_GID]: string;
    }

    export const getCreateEntry: (() => string) = () => {
        return 'CREATE TABLE IF NOT EXISTS ' + GroupProfileEntry.TABLE_NAME + ' (' +
            GroupProfileEntry._ID + ' INTEGER PRIMARY KEY' + DbConstants.COMMA_SEP +
            COLUMN_NAME_UID + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_GID + DbConstants.SPACE + DbConstants.TEXT_TYPE + ' )';
    };
    export const deleteTable: (() => string) = () => {
        return 'DROP TABLE IF EXISTS' + GroupProfileEntry.TABLE_NAME;
    };
}

export namespace GroupEntry {

    export const TABLE_NAME = 'groups';
    export const _ID = '_id';
    export const COLUMN_NAME_GID = 'gid';
    export const COLUMN_NAME_NAME = 'name';
    export const COLUMN_NAME_SYLLABUS = 'syllabus';
    export const COLUMN_NAME_GRADE = 'grade';
    export const COLUMN_NAME_GRADE_VALUE = 'gradeValue';
    export const COLUMN_NAME_CREATED_AT = 'createdAt';
    export const COLUMN_NAME_UPDATED_AT = 'updated_at';

    export interface SchemaMap {
        [COLUMN_NAME_GID]: string;
        [COLUMN_NAME_NAME]: string;
        [COLUMN_NAME_SYLLABUS]: string;
        [COLUMN_NAME_GRADE]: string;
        [COLUMN_NAME_GRADE_VALUE]: string;
        [COLUMN_NAME_CREATED_AT]: number;
        [COLUMN_NAME_UPDATED_AT]: number;
    }

    export const getCreateEntry: (() => string) = () => {
        return 'CREATE TABLE IF NOT EXISTS ' + GroupEntry.TABLE_NAME + ' (' +
            GroupEntry._ID + ' INTEGER PRIMARY KEY' + DbConstants.COMMA_SEP +
            COLUMN_NAME_GID + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_NAME + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_SYLLABUS + DbConstants.SPACE + DbConstants.TEXT_TYPE + ' DEFAULT ""' + DbConstants.COMMA_SEP +
            COLUMN_NAME_GRADE + DbConstants.SPACE + DbConstants.TEXT_TYPE + ' DEFAULT ""' + DbConstants.COMMA_SEP +
            COLUMN_NAME_GRADE_VALUE + DbConstants.SPACE + DbConstants.TEXT_TYPE + ' DEFAULT ""' + DbConstants.COMMA_SEP +
            COLUMN_NAME_CREATED_AT + ' INTEGER' + DbConstants.COMMA_SEP +
            COLUMN_NAME_UPDATED_AT + ' INTEGER' + ' )';
    };
    export const deleteTable: (() => string) = () => {
        return 'DROP TABLE IF EXISTS' + GroupEntry.TABLE_NAME;
    };

}

export namespace ImportedMetadataEntry {

    export const _ID = '_id';
    export const TABLE_NAME = 'imported_metadata';
    export const COLUMN_NAME_IMPORTED_ID = 'imported_id';
    export const COLUMN_NAME_DEVICE_ID = 'device_id';
    export const COLUMN_NAME_COUNT = 'count';

    export const getCreateEntry: (() => string) = () => {
        return 'CREATE TABLE IF NOT EXISTS ' + ImportedMetadataEntry.TABLE_NAME + ' (' +
            ImportedMetadataEntry._ID + ' INTEGER PRIMARY KEY,' +
            ImportedMetadataEntry.COLUMN_NAME_IMPORTED_ID + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            ImportedMetadataEntry.COLUMN_NAME_DEVICE_ID + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            ImportedMetadataEntry.COLUMN_NAME_COUNT + DbConstants.SPACE + DbConstants.INT_TYPE +
            ' )';
    };

    export const getDeleteEntry: (() => string) = () => {
        return 'DROP TABLE IF EXISTS ' + ImportedMetadataEntry.TABLE_NAME;
    };

}

export namespace LearnerAssessmentsEntry {

    export const _ID = '_id';
    export const TABLE_NAME = 'learner_assessments';
    export const COLUMN_NAME_UID = 'uid';
    export const COLUMN_NAME_CONTENT_ID = 'content_id';
    export const COLUMN_NAME_QID = 'qid';
    export const COLUMN_NAME_Q_INDEX = 'qindex';
    export const COLUMN_NAME_CORRECT = 'correct';
    export const COLUMN_NAME_SCORE = 'score';
    export const COLUMN_NAME_MAX_SCORE = 'max_score';
    export const COLUMN_NAME_TIME_SPENT = 'time_spent';
    export const COLUMN_NAME_RES = 'res';
    export const COLUMN_NAME_TIMESTAMP = 'timestamp';
    export const COLUMN_NAME_Q_DESC = 'qdesc';
    export const COLUMN_NAME_Q_TITLE = 'qtitle';
    export const COLUMN_NAME_HIERARCHY_DATA = 'h_data';
    export const COLUMN_NAME_TOTAL_TS = 'total_ts';
    export const COLUMN_NAME_MARKS = 'marks';
    export const COLUMN_NAME_COUNT = 'count';
    export const COLUMN_NAME_TOTAL_MAX_SCORE = 'maxscore';
    export const COLUMN_NAME_USERS_COUNT = 'users_count';
    export const COLUMN_NAME_HANDLE = 'handle';


    export interface SchemaMap {
        [COLUMN_NAME_UID]: string;
        [COLUMN_NAME_CONTENT_ID]: string;
        [COLUMN_NAME_QID]: string;
        [COLUMN_NAME_Q_INDEX]: number;
        [COLUMN_NAME_CORRECT]: number;
        [COLUMN_NAME_SCORE]: number;
        [COLUMN_NAME_MAX_SCORE]: number;
        [COLUMN_NAME_TIME_SPENT]: number;
        [COLUMN_NAME_RES]: string;
        [COLUMN_NAME_TIMESTAMP]: number;
        [COLUMN_NAME_Q_DESC]: string;
        [COLUMN_NAME_Q_TITLE]: string;
        [COLUMN_NAME_HIERARCHY_DATA]: string;
        [COLUMN_NAME_TOTAL_TS]: number;
    }

    export interface QuestionReportsSchema extends SchemaMap {
        [COLUMN_NAME_MARKS]: number;
        [COLUMN_NAME_COUNT]: number;
        [COLUMN_NAME_TOTAL_MAX_SCORE]: number;
    }

    export interface AccuracySchema {
        [COLUMN_NAME_QID]: string;
        [COLUMN_NAME_USERS_COUNT]: number;
    }

    export interface UserReportSchema {
        [COLUMN_NAME_TOTAL_TS]: number;
        [COLUMN_NAME_SCORE]: number;
        [COLUMN_NAME_HIERARCHY_DATA]: string;
        [COLUMN_NAME_CONTENT_ID]: string;
        [COLUMN_NAME_UID]: string;
        [COLUMN_NAME_HANDLE]: string;
        [COLUMN_NAME_TIME_SPENT]: number;
    }

    export const getCreateEntry: (() => string) = () => {
        return 'CREATE TABLE IF NOT EXISTS ' + TABLE_NAME + ' (' +
            _ID + ' INTEGER PRIMARY KEY,' +
            COLUMN_NAME_UID + DbConstants.SPACE + DbConstants.TEXT_TYPE + ' NOT NULL' + DbConstants.COMMA_SEP +
            COLUMN_NAME_CONTENT_ID + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_QID + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_Q_INDEX + DbConstants.SPACE + DbConstants.INT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_CORRECT + DbConstants.SPACE + DbConstants.INT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_SCORE + DbConstants.SPACE + DbConstants.INT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_MAX_SCORE + DbConstants.SPACE + DbConstants.INT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_TIME_SPENT + DbConstants.SPACE + DbConstants.INT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_RES + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_TIMESTAMP + DbConstants.SPACE + DbConstants.INT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_Q_DESC + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_Q_TITLE + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_HIERARCHY_DATA + DbConstants.SPACE + DbConstants.TEXT_TYPE + '  DEFAULT \'\' ' +
            ' )';
    };

    export const getDeleteEntry: (() => string) = () => {
        return 'DROP TABLE IF EXISTS ' + TABLE_NAME;
    };

}

export namespace LearnerSummaryEntry {

    export const _ID = '_id';
    export const TABLE_NAME = 'learner_content_summary';
    export const COLUMN_NAME_UID = 'uid';
    export const COLUMN_NAME_CONTENT_ID = 'content_id';
    export const COLUMN_NAME_AVG_TS = 'avg_ts';
    export const COLUMN_NAME_SESSIONS = 'sessions';
    export const COLUMN_NAME_TOTAL_TS = 'total_ts';
    export const COLUMN_NAME_LAST_UPDATED_ON = 'last_updated_on';
    export const COLUMN_NAME_HIERARCHY_DATA = 'h_data';
    export const COLUMN_NAME_NO_OF_QUESTIONS = 'no_of_questions';
    export const COLUMN_NAME_CORRECT_ANSWERS = 'correct_answers';
    export const COLUMN_NAME_TOTAL_TIME_SPENT = 'total_time_spent';
    export const COLUMN_NAME_TOTAL_MAX_SCORE = 'total_max_score';
    export const COLUMN_NAME_TOTAL_SCORE = 'total_score';


    export interface SchemaMap {
        [COLUMN_NAME_UID]: string;
        [COLUMN_NAME_CONTENT_ID]: string;
        [COLUMN_NAME_CONTENT_ID]: string;
        [COLUMN_NAME_NO_OF_QUESTIONS]: number;
        [COLUMN_NAME_CORRECT_ANSWERS]: number;
        [COLUMN_NAME_TOTAL_TIME_SPENT]: number;
        [COLUMN_NAME_HIERARCHY_DATA]: string;
        [COLUMN_NAME_TOTAL_MAX_SCORE]: number;
        [COLUMN_NAME_TOTAL_SCORE]: number;
    }


    export const getCreateEntry: (() => string) = () => {
        return 'CREATE TABLE IF NOT EXISTS ' + TABLE_NAME + ' (' +
            _ID + ' INTEGER PRIMARY KEY,' +
            COLUMN_NAME_UID + DbConstants.SPACE + DbConstants.TEXT_TYPE + ' NOT NULL' + DbConstants.COMMA_SEP +
            COLUMN_NAME_CONTENT_ID + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_AVG_TS + DbConstants.SPACE + DbConstants.REAL_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_SESSIONS + DbConstants.SPACE + DbConstants.INT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_TOTAL_TS + DbConstants.SPACE + DbConstants.INT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_LAST_UPDATED_ON + DbConstants.SPACE + DbConstants.SPACE + DbConstants.INT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_HIERARCHY_DATA + DbConstants.SPACE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            ' UNIQUE (' + COLUMN_NAME_UID + DbConstants.SPACE + DbConstants.COMMA_SEP + COLUMN_NAME_CONTENT_ID
            + DbConstants.COMMA_SEP + COLUMN_NAME_HIERARCHY_DATA + ') ON CONFLICT REPLACE' +
            ' )';
    };

    export const getDeleteEntry: (() => string) = () => {
        return 'DROP TABLE IF EXISTS ' + TABLE_NAME;
    };

}


