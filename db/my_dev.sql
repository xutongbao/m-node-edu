CREATE TABLE myLogs (
    id         TEXT,
    addtime    TEXT,
    edittime   TEXT,
    path       TEXT,
    username   TEXT,
    browser    TEXT,
    errorTitle TEXT,
    detail     TEXT,
    status     TEXT
);

CREATE TABLE projectTest (
    uid                VARCHAR (100) NOT NULL,
    name               VARCHAR (100) NOT NULL,
    gitRepositorieName VARCHAR (100) NOT NULL,
    branch             VARCHAR (100) NOT NULL,
    url                VARCHAR (300) NOT NULL,
    remarks            VARCHAR (100) NOT NULL,
    addtime            VARCHAR (100) NOT NULL,
    edittime           VARCHAR (100) NOT NULL,
    PRIMARY KEY (
        uid
    )
);

INSERT INTO projectTest (
                            uid,
                            name,
                            gitRepositorieName,
                            branch,
                            url,
                            remarks,
                            addtime,
                            edittime
                        )
                        VALUES (
                            '1632983530971',
                            '知了好客',
                            'edu',
                            'origin/feature/newName',
                            'http://39.97.238.175:81/edu/origin/feature/newName',
                            '知了好客改为知了好学',
                            '1632983530971',
                            ''
                        );

INSERT INTO projectTest (
                            uid,
                            name,
                            gitRepositorieName,
                            branch,
                            url,
                            remarks,
                            addtime,
                            edittime
                        )
                        VALUES (
                            '1632983182375',
                            '知了好客',
                            'edu',
                            'origin/release/ui20210720',
                            'http://39.97.238.175:81/edu/origin/release/ui20210720',
                            '和线上代码同步',
                            '1632983182376',
                            ''
                        );

INSERT INTO projectTest (
                            uid,
                            name,
                            gitRepositorieName,
                            branch,
                            url,
                            remarks,
                            addtime,
                            edittime
                        )
                        VALUES (
                            '1632982857927',
                            '知了好客',
                            'edu',
                            'origin/feature/login',
                            'http://39.97.238.175:81/edu/origin/feature/login',
                            '开发中',
                            '1632982857927',
                            ''
                        );

INSERT INTO projectTest (
                            uid,
                            name,
                            gitRepositorieName,
                            branch,
                            url,
                            remarks,
                            addtime,
                            edittime
                        )
                        VALUES (
                            '1632982651006',
                            '探马',
                            'tan',
                            'origin/feature/login',
                            'http://39.97.238.175:81/tan/origin/feature/login',
                            '自动',
                            '1632982651006',
                            ''
                        );

INSERT INTO projectTest (
                            uid,
                            name,
                            gitRepositorieName,
                            branch,
                            url,
                            remarks,
                            addtime,
                            edittime
                        )
                        VALUES (
                            '1632982424994',
                            '探马',
                            'tan',
                            'origin/master',
                            'http://39.97.238.175:81/tan/origin/master',
                            '自动',
                            '1632982424994',
                            ''
                        );

INSERT INTO projectTest (
                            uid,
                            name,
                            gitRepositorieName,
                            branch,
                            url,
                            remarks,
                            addtime,
                            edittime
                        )
                        VALUES (
                            '1632981932852',
                            '无代码平台',
                            'air',
                            'origin/feature/home',
                            'http://39.97.238.175:81/air/origin/feature/home',
                            '自动',
                            '1632981932852',
                            ''
                        );

INSERT INTO projectTest (
                            uid,
                            name,
                            gitRepositorieName,
                            branch,
                            url,
                            remarks,
                            addtime,
                            edittime
                        )
                        VALUES (
                            '1632981815592',
                            '无代码平台',
                            'air',
                            'origin/master',
                            'http://39.97.238.175:81/air/origin/master',
                            '自动',
                            '1632981815592',
                            ''
                        );

INSERT INTO projectTest (
                            uid,
                            name,
                            gitRepositorieName,
                            branch,
                            url,
                            remarks,
                            addtime,
                            edittime
                        )
                        VALUES (
                            '1632981815591',
                            'node接口',
                            'm-node-edu',
                            'origin/master',
                            'http://39.97.238.175:81',
                            '自动，接口地址',
                            '1632981815591',
                            ''
                        );


UPDATE projectTest SET 'name' = 'node接口1', 'remarks' = '自动，接口地址1', 'edittime' = '1632981815591' WHERE uid = '1632981815591';

Select name from projectTest;
SELECT * FROM projectTest;

















