const data = [
  {
    id: 1,
    label: `Issue #1: Database Connectivity Failure`,
    details: `Exception in thread "main" java.lang.DatabaseError: A test exception
    at com.stackify.stacktrace.StackTraceExample.methodB(StackTraceExample.java:13)
    at com.stackify.stacktrace.StackTraceExample.methodA(StackTraceExample.java:9)
    at com.stackify.stacktrace.StackTraceExample.main(StackTraceExample.java:5)`
  },
  {
    id: 2,
    label: `Issue #2: RestAPI call made and couldn't fetch any data`,
    details: `Exception in thread "main" java.lang.RestAPI Call error: A test exception
    at com.stackify.stacktrace.StackTraceExample.methodB(StackTraceExample.java:13)
    at com.stackify.stacktrace.StackTraceExample.methodA(StackTraceExample.java:9)
    at com.stackify.stacktrace.StackTraceExample.main(StackTraceExample.java:5)`
  },
  {
    id: 3,
    label: `Issue #3: External API call authorization failed`,
    details: `Exception in thread "main" java.lang.AuthorizationError: A test exception
    at com.stackify.stacktrace.StackTraceExample.methodB(StackTraceExample.java:13)
    at com.stackify.stacktrace.StackTraceExample.methodA(StackTraceExample.java:9)
    at com.stackify.stacktrace.StackTraceExample.main(StackTraceExample.java:5)`
  },
  {
    id: 4,
    label: `Issue #4: Database servers are down`,
    details: `Exception in thread "main" java.lang.DatabaseServerDownError: A test exception
    at com.stackify.stacktrace.StackTraceExample.methodB(StackTraceExample.java:13)
    at com.stackify.stacktrace.StackTraceExample.methodA(StackTraceExample.java:9)
    at com.stackify.stacktrace.StackTraceExample.main(StackTraceExample.java:5)`
  },
  {
    id: 5,
    label: `Issue #5: UI rendering error`,
    details: `Exception in thread "main" java.lang.UIRenderingError: A test exception
    at com.stackify.stacktrace.StackTraceExample.methodB(StackTraceExample.java:13)
    at com.stackify.stacktrace.StackTraceExample.methodA(StackTraceExample.java:9)
    at com.stackify.stacktrace.StackTraceExample.main(StackTraceExample.java:5)`
  }
];

export async function fetchIssues() {
  const asyncCall = () =>
    new Promise((resovle, reject) => {
      const timeout = setTimeout(() => {
        resovle(data);
        clearTimeout(timeout);
      }, 1000);
    });
  return await asyncCall();
}

export async function fetchIssueDetails(id) {
  const asyncCall = () =>
    new Promise((resovle, reject) => {
      const timeout = setTimeout(() => {
        const result = data.find(d => d.id == id);
        resovle(result);
        clearTimeout(timeout);
      }, 1000);
    });
  return await asyncCall();
}
