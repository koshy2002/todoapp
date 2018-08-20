class TaskApi {

    static getAllTasks() {

        let serviceUrl = "https://practiceapi.devmountain.com/api/tasks";
        return new Promise((resolve, reject) => {
            fetch(serviceUrl, {
                method: "get",
                mode: 'cors',
                cache: 'no-cache'
            })
                .then(function (response) {
                    resolve(response.json());
                })
                .catch(function (error) {
                    reject(error);
                });
        });

    }

    static createTask(task) {
        let serviceUrl = "https://practiceapi.devmountain.com/api/tasks";
        return new Promise((resolve, reject) => {
            fetch(serviceUrl, {
                method: "POST",
                mode: 'cors',
                body: JSON.stringify(task),
                headers: {
                    'Accept': 'application/json; odata=verbose',
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                    resolve(response.json());
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    static updateTask(taskID ,task) {
        let serviceUrl = "https://practiceapi.devmountain.com/api/tasks/"+ taskID;
        return new Promise((resolve, reject) => {
            fetch(serviceUrl, {
                method: "PATCH",
                mode: 'cors',
                body: JSON.stringify(task),
                headers: {
                    'Accept': 'application/json; odata=verbose',
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                    resolve(response.json());
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    static completeTask(taskId) {
        let serviceUrl = "https://practiceapi.devmountain.com/api/tasks/" + taskId;
        return new Promise((resolve, reject) => {
            fetch(serviceUrl, {
                method: "PUT",
                mode: 'cors'
            })
                .then(function (response) {
                    resolve(response.json());
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }


    static deleteTask(taskId) {
        let serviceUrl = "https://practiceapi.devmountain.com/api/tasks/" + taskId;
        return new Promise((resolve, reject) => {
            fetch(serviceUrl, {
                method: "DELETE",
                mode: 'cors'
            })
                .then(function (response) {
                    resolve(response.json());
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

}

export default TaskApi;